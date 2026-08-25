(function () {
    'use strict';

    // Предотвращаем перезагрузку при клике на ссылку текущей страницы
    document.addEventListener('click', function (e) {
        const link = e.target.closest('.side-nav-links a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        // Создаём абсолютный URL из href
        const linkUrl = new URL(href, window.location.origin);

        // Если ссылка ведёт на текущую страницу — отменяем переход
        if (linkUrl.pathname === window.location.pathname) {
            e.preventDefault();
        }
    }, true);

    // Инициализация кнопки сворачивания
    function initToggle() {
        const toggleBtn = document.getElementById('toggleBtn');
        if (!toggleBtn) return;

        const newToggle = toggleBtn.cloneNode(true);
        toggleBtn.parentNode.replaceChild(newToggle, toggleBtn);

        newToggle.addEventListener('click', function () {
            const isNowCollapsed = document.documentElement.classList.toggle('sidebar-collapsed');
            localStorage.setItem('sidebarCollapsed', isNowCollapsed);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initToggle);
    } else {
        initToggle();
    }
})();