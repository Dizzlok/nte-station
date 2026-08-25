// ═══════════════════════════════════════════════════════
// ПЕРЕВОДЫ UI ЭЛЕМЕНТОВ ИНТЕРФЕЙСА
// ══════════════════════════════════════════════════════

const UI_TRANSLATIONS = {
    ru: {
        // Шапка сайта
        "site_title": "Кафе \"Ориген\"",
        "site_subtitle": "ОПТИМИЗАТОР РОСТЕРА",

        // Табы в шапке
        "tab_optimizer": "Оптимизатор",
        "tab_dishes": "Блюда",
        "tab_characters": "Персонажи",

        // Сайдбар
        "nav_title": "Навигация",
        "nav_home": "На главную",
        "nav_calculator": "Калькулятор",
        "nav_characters": "Персонажи",
        "nav_tier_list": "Тир Лист",
        "nav_changelog": "Список изменений",
        "nav_settings": "Настройки",

        // Кнопки поддержки
        "btn_support": "Поддержать",
        "btn_github": "GitHub",
        "app_credits": "App by Dizzlok",

        // Оптимизатор
        "settings_title": "Настройки",
        "cafes_owned": "Кафе в собственности",
        "cafes_hint": "Макс. блюд и персонажей",
        "trend_category": "Текущий тренд",
        "trend_bonus": "Бонус тренда (+Fons)",
        "popularity_bonus": "Бонус популярности",
        "popularity_hint": "Множитель дохода",
        "hotori_decor": "Декор: Кошка Хотори (+1% трафика)",
        "btn_calculate": "Рассчитать",
        "results_title": "Результаты",
        "results_hint": "Настройте параметры и запустите оптимизатор",
        "roster_dishes": "Блюда",
        "roster_characters": "Персонажи",
        "roster_owned": "в наличии",
        "roster_slots": "слотов",
        "total_count": "всего",
        "dish_combos": "Комбинации блюд",
        "char_combos": "Комбинации персонажей",
        "logic_credit": "Logic:",
        "cafe_1": "1 кафе",
        "cafe_2": "2 кафе",
        "cafe_3": "3 кафе",
        "cafe_4": "4 кафе",
        "cafe_5": "5 кафе",

        // Заглушка результатов
        "placeholder_text": "Настройте параметры и запустите оптимизатор, чтобы увидеть лучший состав.",

        // Кнопки блюд
        "select_all": "Выбрать все",
        "set_all_l2": "Установить все L2",

        // Реклама
        "ad_title": "Реклама",
        "ad_size": "300 × 600"
    },

    en: {
        // Header
        "site_title": "Cafe \"Origen\"",
        "site_subtitle": "ROSTER OPTIMIZER",

        // Tabs
        "tab_optimizer": "Optimizer",
        "tab_dishes": "Dishes",
        "tab_characters": "Characters",

        // Sidebar
        "nav_title": "Navigation",
        "nav_home": "Home",
        "nav_calculator": "Calculator",
        "nav_characters": "Characters",
        "nav_tier_list": "Tier List",
        "nav_changelog": "Changelog",
        "nav_settings": "Settings",

        // Support buttons
        "btn_support": "Support",
        "btn_github": "GitHub",
        "app_credits": "App by Dizzlok",

        // Optimizer
        "settings_title": "Settings",
        "cafes_owned": "Cafes Owned",
        "cafes_hint": "Sets max dishes & characters",
        "trend_category": "Trend",
        "trend_bonus": "Trend Bonus (+Fons)",
        "popularity_bonus": "Popularity Bonus",
        "popularity_hint": "Income multiplier",
        "hotori_decor": "Hotori Cat Decor (+1% traffic)",
        "btn_calculate": "Calculate",
        "results_title": "Results",
        "results_hint": "Configure settings and run optimizer",
        "roster_dishes": "Dishes",
        "roster_characters": "Characters",
        "roster_owned": "owned",
        "roster_slots": "slots",
        "total_count": "total",
        "dish_combos": "Dish combos",
        "char_combos": "Char combos",
        "logic_credit": "Logic:",
        "cafe_1": "1 cafe",
        "cafe_2": "2 cafes",
        "cafe_3": "3 cafes",
        "cafe_4": "4 cafes",
        "cafe_5": "5 cafes",

        // Placeholder
        "placeholder_text": "Configure settings and run optimizer to see the best roster.",

        // Dish buttons
        "select_all": "Select all",
        "set_all_l2": "Set all L2",

        // Ads
        "ad_title": "Advertisement",
        "ad_size": "300 × 600"
    }
};

// Функция получения перевода UI
export function uiText(key) {
    const lang = localStorage.getItem('lang') || 'ru';
    return UI_TRANSLATIONS[lang][key] || UI_TRANSLATIONS.ru[key] || key;
}

// Применение всех переводов UI
export function applyUITranslations() {
    const lang = localStorage.getItem('lang') || 'ru';

    // Обновляем все элементы с data-ui атрибутом
    document.querySelectorAll('[data-ui]').forEach(el => {
        const key = el.dataset.ui;
        const text = uiText(key);

        if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
            el.value = text;
        } else {
            el.textContent = text;
        }
    });

    // Обновляем placeholder'ы
    document.querySelectorAll('[data-ui-placeholder]').forEach(el => {
        const key = el.dataset.uiPlaceholder;
        el.placeholder = uiText(key);
    });
}

// Инициализация при загрузке
export function initUITranslations() {
    applyUITranslations();

    // Слушаем смену языка
    window.addEventListener('langchange', () => {
        applyUITranslations();
    });
}