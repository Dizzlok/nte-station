import { getSettings } from '../../js/common/state.js';
import { getCombinations } from '../../js/common/utils.js';
import { t, getLang } from '../../js/common/i18n.js';

// ── RESULTS UI ─────────────────────────────────────────────────────────────
export function showError(msg) {
    const el = document.getElementById('resultsArea');
    if (el) {
        el.innerHTML = `<div class="results-placeholder">
            <div class="placeholder-icon">⚠️</div>
            <p style="color:var(--red)">${msg}</p>
        </div>`;
    }
}

export function showResults(data) {
    const settings = getSettings();
    const { trendCategory, trendBonus } = settings;
    const trafficRatio = data.traffic / 100;
    const fons = t('Fons') || 'Fons';
    const lang = getLang();

    const trendHtml = trendCategory
        ? `<div style="font-family:var(--mono);font-size:0.78rem;color:var(--accent);margin-bottom:0.5rem">🔥 ${t('Trend') || 'Тренд'}: ${t(trendCategory) || trendCategory} (+${trendBonus.toFixed(2)} ${fons})</div>`
        : '';

    const statsHtml = `<div class="result-stat-row">
        <div class="result-stat"><div class="result-stat-label">${t('Traffic') || 'Трафик'}</div><div class="result-stat-value">${data.traffic.toFixed(2)}</div></div>
        <div class="result-stat"><div class="result-stat-label">${t('Price buff') || 'Бонус цены'}</div><div class="result-stat-value">+${data.priceBuff.toFixed(2)}</div></div>
        <div class="result-stat"><div class="result-stat-label">${t('Price multiplier') || 'Множитель цены'}</div><div class="result-stat-value">×${data.priceMultiplier.toFixed(3)}</div></div>
        <div class="result-stat" style="border-color:var(--accent);background:rgba(245,166,35,0.06)"><div class="result-stat-label">${t('Total Income (Displayed In-game)') || 'Общий доход (как в игре)'}</div><div class="result-stat-value">${data.income.toFixed(2)} <span style="font-size:0.7rem;color:var(--text3)">${fons}/${t('hour') || 'час'}</span></div></div>
        <div class="result-stat" style="border-color:var(--accent);background:rgba(245,166,35,0.06)"><div class="result-stat-label">${t('Total Income (Actual)') || 'Общий доход (реальный)'}</div><div class="result-stat-value">${(data.income * (1 + settings.popularityBonus)).toFixed(2)} <span style="font-size:0.7rem;color:var(--text3)">${fons}/${t('hour') || 'час'}</span></div></div>
    </div>`;

    const dishesHtml = `<div class="result-section-title">${t('Best menu') || 'Лучшее меню'}</div><div class="result-menu">${data.dishes.map(d => {
        const finalPrice = (d.basePrice + data.priceBuff) * data.priceMultiplier;
        return `<div class="result-dish">
            <div class="result-dish-name">${d.isTrending ? '<span class="trend-badge">🔥</span>' : ''}${t(d.name) || d.name} <span style="font-size:0.7rem;color:var(--text3);font-family:var(--mono)">${t(d.type) || d.type}</span></div>
            <div style="display:flex;gap:1rem;font-family:var(--mono);font-size:0.8rem">
                <span class="result-dish-price">${finalPrice.toFixed(2)} ${fons}</span>
                <span class="result-dish-income">${(finalPrice * trafficRatio).toFixed(2)}/${t('hour') || 'час'}</span>
            </div>
        </div>`;
    }).join('')}</div>`;

    const logHtml = data.log.length > 0 ? `<div class="result-section-title" style="margin-top:1rem">${t('Character bonuses') || 'Бонусы персонажей'}</div><div class="result-log">${data.log.map(e => `<div class="log-entry"><span class="log-name">${t(e.name) || e.name}</span><span class="log-buffs">${e.buffs}</span></div>`).join('')}</div>` : '';

    const el = document.getElementById('resultsArea');
    if (el) el.innerHTML = `<div class="results-output">${trendHtml}${statsHtml}${dishesHtml}${logHtml}</div>`;
}