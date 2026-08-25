// sidebar-render.js — Единый рендер сайдбара для всех страниц
(function () {
    'use strict';

    const NAV_ITEMS = [
        { href: 'index.html', icon: 'home.svg', labelRu: 'На главную', labelEn: 'Home' },
        { href: 'calculator/index.html', icon: 'calculator.svg', labelRu: 'Калькулятор', labelEn: 'Calculator' },
        { href: 'content/characters.html', icon: 'characters.svg', labelRu: 'Персонажи', labelEn: 'Characters' },
        { href: 'changelog.html', icon: 'changelog.svg', labelRu: 'Список изменений', labelEn: 'Changelog' },
        { href: 'settings.html', icon: 'settings.svg', labelRu: 'Настройки', labelEn: 'Settings' }
    ];

    const STORAGE_KEY = 'sidebarCollapsed';

    function getLang() {
        const attrLang = document.documentElement.getAttribute('data-current-lang');
        if (attrLang) return attrLang;
        return localStorage.getItem('lang') || 'ru';
    }

    function getActiveHref() {
        const path = window.location.pathname;
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;

        for (const item of NAV_ITEMS) {
            if (cleanPath === item.href) {
                return item.href;
            }
        }

        if (cleanPath === '' || cleanPath === 'index.html') {
            return 'index.html';
        }

        return null;
    }

    function renderSidebar() {
        const container = document.getElementById('sidebar-root');
        if (!container) return;

        const lang = getLang();
        const activeHref = getActiveHref();
        const isCollapsed = localStorage.getItem(STORAGE_KEY) === 'true';

        if (isCollapsed) {
            document.documentElement.classList.add('sidebar-collapsed');
        } else {
            document.documentElement.classList.remove('sidebar-collapsed');
        }

        let linksHTML = '';
        NAV_ITEMS.forEach(item => {
            const label = lang === 'en' ? item.labelEn : item.labelRu;
            const isActive = item.href === activeHref;
            const activeClass = isActive ? ' active' : '';

            linksHTML += `
                <li>
                    <a href="${item.href}" class="side-link${activeClass}" data-tooltip="${label}">
                        <img src="assets/images/navigation/${item.icon}" alt="" class="nav-icon">
                        <span class="side-nav-link-text">${label}</span>
                    </a>
                </li>`;
        });

        const supportLabel = lang === 'en' ? 'Support' : 'Поддержать';
        const navTitle = lang === 'en' ? 'Navigation' : 'Навигация';

        container.innerHTML = `
            <nav class="side-nav" id="sideNav">
                <div class="side-nav-scroll">
                    <div class="side-nav-header">
                        <img src="assets/images/navigation/lines.svg" alt="" class="lines-icon">
                    </div>
                    <div class="side-nav-section">
                        <div class="side-nav-section-title">${navTitle}</div>
                        <ul class="side-nav-links">
                            ${linksHTML}
                        </ul>
                    </div>
                </div>
                <div class="side-nav-footer">
                    <a href="https://boosty.to/yourpage" class="boosty-btn" target="_blank" data-tooltip="${supportLabel}">
                        <img src="assets/images/navigation/support.svg" alt="" class="boosty-btn-icon">
                        <span class="boosty-btn-text">${supportLabel}</span>
                    </a>
                    <a href="https://github.com/Dizzlok/nte-cafe-optimizer-ru" class="github-btn" target="_blank" data-tooltip="GitHub">
                        <img src="assets/images/navigation/github.svg" alt="" class="github-btn-icon">
                        <span class="github-btn-text">GitHub</span>
                    </a>
                    <div class="app-credits">App by Dizzlok</div>
                </div>
            </nav>`;

        initToggle();
    }

    function initToggle() {
        const toggleBtn = document.getElementById('toggleBtn');
        if (!toggleBtn) return;

        const newToggle = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newToggle, toggleBtn);

        newToggle.addEventListener('click', () => {
            const isNowCollapsed = document.documentElement.classList.toggle('sidebar-collapsed');
            localStorage.setItem(STORAGE_KEY, isNowCollapsed);
        });
    }

    function init() {
        renderSidebar();
    }

    window.renderSidebar = renderSidebar;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();