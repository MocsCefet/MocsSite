/* === FUNCIONALIDADES GERAIS DO SITE === */

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
        header.style.height = "70px";
    } else {
        header.style.boxShadow = "none";
        header.style.height = "80px";
    }
});

// Ativa link ativo na navegação baseado no scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Form Handler
function handleFormSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Enviando...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Mensagem enviada com sucesso! A equipe do MOCS entrará em contato em breve.");
        btn.innerText = "Enviado!";
        btn.style.backgroundColor = "#28a745";
        e.target.reset();
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "var(--color-orange)";
            btn.style.opacity = "1";
        }, 3000);
    }, 1500);
}

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar dados de sheets
    initSite();
});
