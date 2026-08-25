// js/common/i18n.js — Экспорт функции перевода для ES6 модулей

export function getLang() {
    return localStorage.getItem('lang') || 'ru';
}

export function t(key) {
    if (!key) return "";
    const lang = getLang();
    const translations = window.TRANSLATIONS || {};

    if (translations[key] && typeof translations[key] === 'object') {
        return translations[key][lang] || translations[key].ru || key;
    }
    return translations[key] || key;
}