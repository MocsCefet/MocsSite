/* === GOOGLE SHEETS INTEGRATION === */

// CONFIGURAÇÃO GOOGLE SHEETS
// Substitua pelos IDs reais das suas planilhas
// As planilhas devem estar publicadas (Arquivo > Compartilhar > Publicar na Web > CSV)
const SHEET_CONFIG = {
    team: 'SEU_ID_PLANILHA_EQUIPE_AQUI',
    news: 'SEU_ID_PLANILHA_NOTICIAS_AQUI',
    partners: 'SEU_ID_PLANILHA_PARCEIROS_AQUI'
};

// DADOS MOCK (FALLBACK)
// Usado se a conexão com Sheets falhar ou IDs estiverem vazios
const MOCK_DATA = {
    team: [
        { name: "Ana Silva", role: "Secretária Geral", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Carlos Souza", role: "Diretor Acadêmico", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Beatriz Costa", role: "Diretora Administrativa", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        { name: "João Pedro", role: "Head de Marketing", img: "https://randomuser.me/api/portraits/men/85.jpg" }
    ],
    news: [
        { title: "Inscrições abertas para o MOCS XII", date: "04 Dez 2025", image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "#" },
        { title: "Workshop de Oratória confirmado", date: "20 Nov 2025", image: "https://images.unsplash.com/photo-1475721027767-p753c96d996c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "#" },
        { title: "Resultado da Seletiva de Staff", date: "15 Out 2025", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", link: "#" }
    ],
    partners: [
        { name: "CEFET-MG" },
        { name: "Diplomacia Civil" },
        { name: "ONU Brasil" }
    ]
};

// FETCH GOOGLE SHEETS
async function fetchGoogleSheet(sheetId) {
    if (!sheetId || sheetId.includes('SEU_ID')) return null;
    
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Erro na rede');
        const data = await response.text();
        return parseCSV(data);
    } catch (error) {
        console.warn("Erro ao carregar Sheet (usando fallback):", error);
        return null;
    }
}

// PARSE CSV
function parseCSV(csvText) {
    const rows = csvText.split('\n').map(row => row.split(','));
    const headers = rows[0];
    return rows.slice(1)
        .filter(row => row.some(cell => cell.trim() !== ''))
        .map(row => {
            let obj = {};
            row.forEach((val, i) => {
                if(headers[i]) obj[headers[i].trim()] = val ? val.trim() : '';
            });
            return obj;
        });
}

// RENDER EQUIPE
async function renderTeam() {
    const teamContainer = document.getElementById('team-container');
    if (!teamContainer) return;
    
    const teamData = await fetchGoogleSheet(SHEET_CONFIG.team) || MOCK_DATA.team;
    
    teamContainer.innerHTML = teamData.map(member => `
        <div class="team-member">
            <img src="${member.img || member.Foto || 'https://via.placeholder.com/220'}" alt="${member.name || member.Nome}" class="member-img">
            <div class="member-info">
                <h4>${member.name || member.Nome}</h4>
                <p>${member.role || member.Cargo}</p>
            </div>
        </div>
    `).join('');
}

// RENDER NOTÍCIAS
async function renderNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;
    
    const newsData = await fetchGoogleSheet(SHEET_CONFIG.news) || MOCK_DATA.news;

    newsContainer.innerHTML = newsData.map(item => `
        <div class="news-card">
            <div class="news-img" style="background-image: url('${item.image || item.Imagem || ''}')"></div>
            <div class="news-content">
                <div class="news-date">${item.date || item.Data}</div>
                <h3>${item.title || item.Titulo}</h3>
                <a href="${item.link || item.Link || '#'}" class="news-link">Ler mais &rarr;</a>
            </div>
        </div>
    `).join('');
}

// RENDER PARCEIROS
async function renderPartners() {
    const partnersContainer = document.getElementById('partners-container');
    if (!partnersContainer) return;
    
    const partnersData = await fetchGoogleSheet(SHEET_CONFIG.partners) || MOCK_DATA.partners;

    partnersContainer.innerHTML = partnersData.map(partner => `
        <h3 style="color: #555;">${partner.name || partner.Nome}</h3>
    `).join('');
}

// INICIALIZAR SITE
async function initSite() {
    await renderTeam();
    await renderNews();
    await renderPartners();
}
