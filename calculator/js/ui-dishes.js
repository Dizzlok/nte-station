import { getUserState, saveUserState } from '../../js/common/state.js';
import { t } from '../../js/common/i18n.js';
import { getAssetPath } from '../../js/common/utils.js'; // <-- ДОБАВЛЕНО

// ── НОРМАЛИЗАЦИЯ ИМЕНИ ДЛЯ ПУТИ К КАРТИНКЕ ────────────────────────────────
function normalizeNameToPath(name) {
    return name
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9_]/g, '');
}

// ── DISHES UI (КАРТОЧНЫЙ ДИЗАЙН) ──────────────────────────────────────────
export function renderDishes(masterData, TRANSLATIONS, settings, updateRosterSummary) {
    const userState = getUserState();
    const container = document.getElementById('dishesContainer');
    if (!container) return;
    container.innerHTML = '';

    const dishesByType = {};
    masterData.dishes.forEach(d => {
        const type = d.type;
        if (!dishesByType[type]) dishesByType[type] = [];
        dishesByType[type].push(d);
    });

    const typeOrder = ['Desserts', 'Beverages', 'Main Dishes'];
    const sortedTypes = Object.keys(dishesByType).sort((a, b) => {
        const ia = typeOrder.indexOf(a);
        const ib = typeOrder.indexOf(b);
        if (ia === -1 && ib === -1) return a.localeCompare(b);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
    });

    const trendCategory = (settings?.trendCategory || '').toLowerCase();
    const trendingSubItems = trendCategory
        ? new Set(masterData.ingredients
            .filter(r => r.category.toLowerCase() === trendCategory)
            .map(r => r.name.toLowerCase()))
        : new Set();

    const fallbackAsset = getAssetPath('assets/images/common/not_found/not_found_256.webp');

    sortedTypes.forEach(type => {
        const typeSection = document.createElement('div');
        typeSection.className = 'dish-category-section';

        const title = document.createElement('div');
        title.className = 'dish-category-title';
        title.textContent = t(type) || type;
        typeSection.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'dish-cards-grid';

        dishesByType[type].forEach(d => {
            if (!userState.dishes[d.name]) {
                userState.dishes[d.name] = { owned: false, level: 1 };
            }
            const us = userState.dishes[d.name];
            const isOwned = us.owned;
            const currentLevel = us.level || 1;

            const ingredients = d.ingredients.toLowerCase();
            const typeMatch = trendCategory && d.type.toLowerCase().includes(trendCategory);
            let subMatch = false;
            for (const sub of trendingSubItems) {
                if (ingredients.includes(sub)) { subMatch = true; break; }
            }
            const ingMatch = trendCategory && (ingredients.includes(trendCategory) || subMatch);
            const isTrending = typeMatch || ingMatch;

            const basePrice = currentLevel === 2 ? d.priceL2 : d.priceL1;
            const bonus = isTrending ? (settings?.trendBonus || 0) : 0;
            const finalPrice = basePrice + bonus;
            const ingredientsList = d.ingredients.split(',').map(ing => ing.trim());

            const dishIconSrc = getAssetPath(`assets/images/common/dishes/100/${normalizeNameToPath(d.name)}.webp`);

            const card = document.createElement('div');
            card.className = `dish-card ${isOwned ? 'owned' : 'not-owned'}`;
            card.dataset.dishName = d.name;
            card.innerHTML = `
                <div class="dish-card-header">
                    <img src="${dishIconSrc}" alt="${d.name}" class="dish-icon" loading="lazy" onerror="if(this.src.indexOf('not_found_1')===-1) this.src='${fallbackAsset}'">
                    <div class="dish-info">
                        <div class="dish-name">${t(d.name) || d.name}</div>
                        <div class="dish-meta">
                            <span class="dish-type-badge">${t(type) || type}</span>
                            <span class="dish-level-badge">Lv${currentLevel}</span>
                        </div>
                    </div>
                    <div class="dish-ownership-badge ${isOwned ? 'owned' : 'not-owned'}"></div>
                </div>
                <div class="dish-price-row">
                    <span class="dish-price">${finalPrice.toFixed(1)} ${t('Fons') || 'Fons'}</span>
                    ${bonus > 0 ? `<span class="dish-price-bonus">+${bonus.toFixed(2)}</span>` : ''}
                </div>
                <div class="dish-level-selector">
                    <button class="dish-level-btn ${currentLevel === 1 ? 'active' : ''}" data-dish-lvl="${d.name}" data-level="1">L1</button>
                    <button class="dish-level-btn ${currentLevel === 2 ? 'active' : ''}" data-dish-lvl="${d.name}" data-level="2">L2</button>
                </div>
                <div class="dish-ingredients">
                    ${ingredientsList.map(ing => {
                const ingSrc = getAssetPath(`assets/images/common/ingredients/${normalizeNameToPath(ing)}.webp`);
                return `
                        <div class="ingredient-row">
                            <img src="${ingSrc}" alt="${ing}" class="ingredient-icon" loading="lazy" onerror="if(this.src.indexOf('not_found_1')===-1) this.src='${fallbackAsset}'">
                            <span class="ingredient-name">${t(ing) || ing}</span>
                        </div>`;
            }).join('')}
                </div>
            `;
            grid.appendChild(card);
        });

        typeSection.appendChild(grid);
        container.appendChild(typeSection);
    });

    setupDishEventListeners(updateRosterSummary);
    updateBulkButtonsText();
}

// ── ОБНОВЛЕНИЕ ТЕКСТА КНОПОК "ВЫБРАТЬ ВСЕ" / "СБРОСИТЬ ВСЕ" ──────────────
export function updateBulkButtonsText() {
    const btnOwned = document.getElementById('btnToggleAllOwned');
    if (btnOwned) {
        const userState = getUserState();
        const allOwned = window.masterData.dishes.every(d => userState.dishes[d.name]?.owned);
        btnOwned.textContent = allOwned ? (t('Reset all') || 'Сбросить все') : (t('Select All') || 'Выбрать все');
        btnOwned.classList.toggle('active', allOwned);
    }
    const btnLevel = document.getElementById('btnToggleAllLevel');
    if (btnLevel) {
        const userState = getUserState();
        const allL2 = window.masterData.dishes.every(d => userState.dishes[d.name]?.level === 2);
        btnLevel.textContent = allL2 ? (t('Set all L1') || 'Установить все L1') : (t('Set all L2') || 'Установить все L2');
        btnLevel.classList.toggle('active', allL2);
    }
}

// ── ОБРАБОТЧИКИ СОБЫТИЙ ───────────────────────────────────────────────────
function setupDishEventListeners(updateRosterSummary) {
    document.querySelectorAll('.dish-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.dish-level-btn')) return;
            const name = card.dataset.dishName;
            const userState = getUserState();
            if (!userState.dishes[name]) {
                userState.dishes[name] = { owned: false, level: 1 };
            }
            userState.dishes[name].owned = !userState.dishes[name].owned;
            saveUserState();
            const scrollPos = window.scrollY;
            renderDishes(window.masterData, window.TRANSLATIONS, window.settings, updateRosterSummary);
            if (updateRosterSummary) updateRosterSummary();
            window.scrollTo(0, scrollPos);
        });
    });

    document.querySelectorAll('.dish-level-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const name = btn.dataset.dishLvl;
            const level = parseInt(btn.dataset.level);
            const userState = getUserState();
            if (!userState.dishes[name]) {
                userState.dishes[name] = { owned: false, level: 1 };
            }
            userState.dishes[name].level = level;
            saveUserState();
            const scrollPos = window.scrollY;
            renderDishes(window.masterData, window.TRANSLATIONS, window.settings, updateRosterSummary);
            window.scrollTo(0, scrollPos);
        });
    });

    const btnOwned = document.getElementById('btnToggleAllOwned');
    if (btnOwned) {
        btnOwned.onclick = () => {
            const userState = getUserState();
            const nowAllOwned = window.masterData.dishes.every(d => userState.dishes[d.name]?.owned);
            window.masterData.dishes.forEach(d => {
                if (!userState.dishes[d.name]) {
                    userState.dishes[d.name] = { owned: false, level: 1 };
                }
                userState.dishes[d.name].owned = !nowAllOwned;
            });
            saveUserState();
            if (updateRosterSummary) updateRosterSummary();
            renderDishes(window.masterData, window.TRANSLATIONS, window.settings, updateRosterSummary);
        };
    }

    const btnLevel = document.getElementById('btnToggleAllLevel');
    if (btnLevel) {
        btnLevel.onclick = () => {
            const userState = getUserState();
            const nowAllL2 = window.masterData.dishes.every(d => userState.dishes[d.name]?.level === 2);
            window.masterData.dishes.forEach(d => {
                if (!userState.dishes[d.name]) {
                    userState.dishes[d.name] = { owned: false, level: 1 };
                }
                userState.dishes[d.name].level = nowAllL2 ? 1 : 2;
            });
            saveUserState();
            renderDishes(window.masterData, window.TRANSLATIONS, window.settings, updateRosterSummary);
        };
    }
}