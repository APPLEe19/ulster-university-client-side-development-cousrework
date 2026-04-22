document.addEventListener("DOMContentLoaded", function () {

    
    const themeToggle = document.querySelector('.toggle-theme');
    const savedTheme = localStorage.getItem('theme') || 'light';

    applyTheme(savedTheme);

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeToggle) themeToggle.textContent = '🌙';
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {

            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

            if (isDark) {
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }

        });
    }

    const cookieBanner = document.getElementById('cookie-banner');
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    function showCookieBanner() {
        if (cookieBanner) {
            cookieBanner.style.display = 'block';
        }
    }

    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
    }

    if (cookieBanner) {
        if (!cookiesAccepted) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    }

    window.acceptCookies = function () {
        hideCookieBanner();
        localStorage.setItem('cookiesAccepted', 'true');
    };

});
