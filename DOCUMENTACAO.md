# 🌍 MOCS - Modelo de Comitês Simulados CEFET-MG

Site oficial completo do **MOCS – Modelo de Comitês Simulados do CEFET-MG**.

## 📂 Estrutura de Arquivos

```
MocsSite/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos (CSS global)
├── js/
│   ├── main.js            # JavaScript funcionalidades gerais
│   └── sheets.js          # Integração com Google Sheets
└── pages/
    ├── sobre.html         # Página "Sobre"
    ├── historia.html      # Página "História"
    ├── equipe.html        # Página "Equipe" (dados dinâmicos)
    ├── servicos.html      # Página "Serviços"
    ├── galeria.html       # Página "Galeria"
    ├── noticias.html      # Página "Notícias" (dados dinâmicos)
    └── contato.html       # Página "Contato" e FAQ
```

## 🎨 Identidade Visual

- **Azul MOCS:** `#205395`
- **Laranja Destaque:** `#FF751F`
- **Branco:** `#FFFFFF`
- **Cinza Claro:** `#F4F6F9`
- **Fontes:** Montserrat (títulos) + Open Sans (corpo)
- **Ícones:** Bootstrap Icons

## 🚀 Como Usar

### 1. Abrir o Site Localmente
1. Abra o arquivo `index.html` no navegador
2. Ou use um servidor local (recomendado):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server)
   http-server
   ```
3. Acesse `http://localhost:8000`

### 2. Integrar com Google Sheets

O site carrega dinamicamente:
- **Equipe** (membros)
- **Notícias** (últimas atualizações)
- **Parceiros** (instituições parceiras)

#### Passo a Passo:

1. **Crie 3 Google Sheets públicas** com as colunas:

   **Planilha EQUIPE:**
   ```
   Nome | Cargo | Foto
   Ana Silva | Secretária Geral | https://randomuser.me/api/portraits/women/44.jpg
   Carlos Souza | Diretor Acadêmico | https://randomuser.me/api/portraits/men/32.jpg
   ```

   **Planilha NOTÍCIAS:**
   ```
   Titulo | Data | Imagem | Link
   Inscrições abertas para MOCS XII | 04 Dez 2025 | https://... | #
   Workshop de Oratória | 20 Nov 2025 | https://... | #
   ```

   **Planilha PARCEIROS:**
   ```
   Nome
   CEFET-MG
   Diplomacia Civil
   ONU Brasil
   ```

2. **Publique como CSV:**
   - Abra cada sheet
   - Clique em `Arquivo > Compartilhar > Publicar na Web`
   - Selecione o intervalo e escolha "CSV"
   - Copie o link

3. **Edite o arquivo `js/sheets.js`:**
   ```javascript
   const SHEET_CONFIG = {
       team: '1nRkZfx_k3qZ9z7xJxK8yQ9z_a7b8c9dEfGhIjK',      // ID da planilha de equipe
       news: '2pSqLfx_k4rZ9z8yKyL9zR0a_b8c9d0EfGhIjL',      // ID da planilha de notícias
       partners: '3qTrMfx_k5sZ9z9yLzM0aS1b_c9d0e1FfGhIjM'   // ID da planilha de parceiros
   };
   ```

   **Como encontrar o ID:**
   A URL da sua planilha: `https://docs.google.com/spreadsheets/d/**SEU_ID_AQUI**/edit`
   
   Copie a parte entre `/d/` e `/edit`

4. **Teste:**
   - Abra o navegador e verifique se os dados aparecem
   - Use o console (F12) para ver erros
   - Dados padrão (MOCK) aparecem se o sheet não estiver configurado

## 📝 Personalização

### Editar Conteúdo Estático
- **Home:** Edite `index.html` (linhas 45-200)
- **Sobre:** Edite `pages/sobre.html`
- **História:** Edite `pages/historia.html` (linha da timeline)
- **Serviços:** Edite `pages/servicos.html`
- **Contato:** Edite `pages/contato.html` (informações de contato)

### Editar Cores
No arquivo `css/style.css`, edite as variáveis CSS:
```css
:root {
    --color-blue: #205395;          /* Azul principal */
    --color-blue-dark: #153a6a;     /* Azul escuro */
    --color-orange: #FF751F;        /* Laranja destaque */
    --color-orange-light: #ff914d;  /* Laranja claro */
    --color-white: #FFFFFF;         /* Branco */
    --color-gray-light: #F4F6F9;    /* Cinza claro */
}
```

### Adicionar Nova Página
1. Crie novo arquivo em `pages/nova-pagina.html`
2. Copie o template de outra página (ex: `servicos.html`)
3. Edite o conteúdo
4. Adicione o link no header (em todas as páginas):
   ```html
   <li><a href="nova-pagina.html">Nova Página</a></li>
   ```

### Mudar Banner/Imagem do Hero
Em cada página, procure por:
```html
background: linear-gradient(...), url('https://images.unsplash.com/...?q=80');
```
E substitua a URL da imagem.

## 🔧 Funcionalidades

✅ **Menu Responsivo** - Mobile-friendly com toggle menu
✅ **Animações Suaves** - CSS transitions e keyframes
✅ **Dark Mode Header** - Efeito ao fazer scroll
✅ **Lightbox Galeria** - Zoom de fotos com overlay
✅ **Formulário de Contato** - Simulado (pode integrar com serviço real)
✅ **Newsletter** - Inscrição simulada
✅ **Cards com Hover** - Elevação ao passar mouse
✅ **Timeline Responsiva** - Adapta para mobile
✅ **Loading Skeleton** - Animação enquanto carrega dados
✅ **SEO Friendly** - Estrutura HTML semântica

## 📱 Responsividade

O site é totalmente responsivo para:
- 📱 Mobile (< 768px) - Menu hambúrguer, layout coluna única
- 💻 Tablet (768px - 1024px) - Grid 2 colunas
- 🖥️ Desktop (> 1024px) - Layout completo multi-coluna

## 🌐 Deploy

### Opção 1: GitHub Pages
```bash
git add .
git commit -m "Site MOCS completo"
git push origin main
```
Nas settings do repo > Pages > Source: Branch main, folder /root

### Opção 2: Netlify
1. Conecte GitHub: https://app.netlify.com
2. Selecione repositório
3. Build command: (deixe em branco)
4. Publish directory: `/`
5. Deploy!

### Opção 3: Vercel
1. Importe: https://vercel.com/new
2. Selecione repositório GitHub
3. Configure settings
4. Deploy automático!

## 🔗 Links Úteis

- [Bootstrap Icons](https://icons.getbootstrap.com/) - Ícones
- [Google Fonts](https://fonts.google.com/) - Fontes
- [Unsplash](https://unsplash.com/) - Imagens stock
- [ColorHunt](https://colorhunt.co/) - Paletas de cores

## 📧 Informações de Contato

- **Email:** contato@mocscefet.com.br
- **Instagram:** @mocscefet
- **Telefone:** +55 (31) 3319-7800
- **Local:** Av. Amazonas, 5253 - Belo Horizonte-MG
- **Campus:** CEFET-MG, Prédio das Engenharias, Sala 215

## 🎯 Checklist de Customização

- [ ] Atualizar IDs das Google Sheets em `js/sheets.js`
- [ ] Adicionar equipe real na Google Sheet de EQUIPE
- [ ] Adicionar notícias reais na Google Sheet de NOTÍCIAS
- [ ] Adicionar parceiros reais na Google Sheet de PARCEIROS
- [ ] Atualizar email de contato em todas as páginas
- [ ] Atualizar telefone e endereço
- [ ] Adicionar redes sociais (Instagram, LinkedIn, etc)
- [ ] Testar responsividade em mobile
- [ ] Testar todos os links internos
- [ ] Testar formulários
- [ ] Deploy em servidor público

## 📄 Licença

Projeto de extensão do CEFET-MG © 2025  
Desenvolvido para democratizar a educação em diplomacia.

---

**Versão:** 1.0  
**Última atualização:** Dezembro 4, 2025  
**Desenvolvedor:** GitHub Copilot
