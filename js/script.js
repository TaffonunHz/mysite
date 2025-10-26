let currentLang = localStorage.getItem('lang') || null;
let currentTheme = localStorage.getItem('theme') || 'light';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    updateTexts();
    document.getElementById('lang-select').style.display = 'none';
    document.getElementById('lang-switch').innerText = lang === 'en' ? 'RU' : 'EN';
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-switch').innerText = '☀️';
    } else {
        document.body.classList.remove('dark');
        document.getElementById('theme-switch').innerText = '🌙';
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function updateTexts() {
    // Update contact links
const contactLinks = document.querySelectorAll('.contact-btn');
contactLinks.forEach(link => {
    link.innerText = link.getAttribute(`data-${currentLang}`);
});

    const elements = document.querySelectorAll('[data-en], [data-ru]');
    elements.forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    // Update navbar links
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.innerText = link.getAttribute(`data-${currentLang}`);
    });
}

function openModal(src) {
    const modal = document.getElementById('modal');
    const img = document.getElementById('modal-img');
    img.src = src;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Force language selection screen to show on every page load
    localStorage.removeItem('lang');
    currentLang = null;
    document.getElementById('lang-select').style.display = 'flex';
    setTheme(currentTheme);

    document.getElementById('lang-switch').addEventListener('click', toggleLanguage);
    document.getElementById('theme-switch').addEventListener('click', toggleTheme);
});