
const themeToggle = document.querySelector('.toggle-theme');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});


function acceptCookies() {
    document.getElementById('cookie-banner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

window.onload = () => {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
};