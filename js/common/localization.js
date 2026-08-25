// js/common/localization.js

const TRANSLATIONS = {
  // Ингредиенты
  "Coffee Beans": { ru: "Кофейные бобы 9̊˚С", en: "Coffee Beans" },
  "Coconut": { ru: "Кокос", en: "Coconut" },
  "Cocoa Powder": { ru: "Какао-порошок «Приятели по выпечке»", en: "Cocoa Powder" },
  "Flour": { ru: "Мука", en: "Flour" },
  "Apple": { ru: "Яблоко", en: "Apple" },
  "Eggs": { ru: "Свежие яйца", en: "Eggs" },
  "Lettuce": { ru: "Латук", en: "Lettuce" },
  "Fish": { ru: "Морская рыба", en: "Fish" },
  "Orange": { ru: "Апельсин", en: "Orange" },
  "Milk": { ru: "Молоко", en: "Milk" },
  "Matcha Powder": { ru: "Порошок матча «Приятели по выпечке»", en: "Matcha Powder" },
  "Whipping Cream": { ru: "Сливки «Приятели по выпечке»", en: "Whipping Cream" },
  "Beef": { ru: "Свежая Говядина", en: "Beef" },
  "Butter": { ru: "Твёрдое масло", en: "Butter" },
  "Red Beans": { ru: "Красные бобы", en: "Red Beans" },
  "Strawberry": { ru: "Клубника", en: "Strawberry" },
  "Onion": { ru: "Лук", en: "Onion" },
  "Pork": { ru: "Свежая Свинина", en: "Pork" },
  "Salt": { ru: "Морская соль «Соль или сахар»", en: "Salt" },
  "Cookies": { ru: "Печенье «Пука»", en: "Cookies" },
  "Cheese": { ru: "Головка сыра T&J", en: "Cheese" },
  "Ham": { ru: "Ветчина", en: "Ham" },
  "Sugar": { ru: "Белый сахар «Соль или сахар?»", en: "Sugar" },
  "Skibbles": { ru: "Скиблс", en: "Skibbles" },
  "Tomato": { ru: "Помидор", en: "Tomato" },

  // Блюда
  "Coconut Latte": { ru: "Кокосовый латте", en: "Coconut Latte" },
  "Ice Mocha": { ru: "Мокко со льдом", en: "Ice Mocha" },
  "Apple Pie": { ru: "Яблочный пирог", en: "Apple Pie" },
  "Tomato & Fried Egg": { ru: "Круассан с помидором и жареным яйцом", en: "Tomato & Fried Egg" },
  "Tuna Sandwich": { ru: "Сэндвич с тунцом", en: "Tuna Sandwich" },
  "Amber Glamor": { ru: "Янтарный гламур", en: "Amber Glamor" },
  "Matcha Lava Mousse": { ru: "Лавовый мусс с матча", en: "Matcha Lava Mousse" },
  "Snowy Latte": { ru: "Снежный Латте", en: "Snowy Latte" },
  "Thick-Cut Fresh Beef Sandwich": { ru: "Сэндвич с толстым куском свежей говядины", en: "Thick-Cut Fresh Beef Sandwich" },
  "Red Bean & Butter Croissant": { ru: "Круассан с маслом и красной фасолью", en: "Red Bean & Butter Croissant" },
  "Strawberry Box Cake": { ru: "Клубничный торт", en: "Strawberry Box Cake" },
  "Orange Hot Coffee": { ru: "Горячий апельсиновый кофе", en: "Orange Hot Coffee" },
  "Pork Cutlet": { ru: "Сэндвич со свининой", en: "Pork Cutlet" },
  "Coconut Macchiato": { ru: "Кокосовый макиато", en: "Coconut Macchiato" },
  "Matcha Latte with Milk Cap": { ru: "Матча латте с молочной шапкой", en: "Matcha Latte with Milk Cap" },
  "Tiramisu": { ru: "Тирамису", en: "Tiramisu" },
  "Ham & Cheese": { ru: "Круассан с ветчиной и сыром", en: "Ham & Cheese" },
  "Caramel & Cocoa Mille-Feuille": { ru: "Мильфей с карамелью и какао", en: "Caramel & Cocoa Mille-Feuille" },

  // Персонажи
  "Nanally": { ru: "Нанали", en: "Nanally" },
  "Sakiri": { ru: "Сакири", en: "Sakiri" },
  "Skia": { ru: "Ския", en: "Skia" },
  "Baicang": { ru: "Байканг", en: "Baicang" },
  "Mint": { ru: "Минт", en: "Mint" },
  "Haniel": { ru: "Ханиэль", en: "Haniel" },
  "Adler": { ru: "Адлер", en: "Adler" },
  "Daffodil": { ru: "Даффодил", en: "Daffodil" },
  "Edgar": { ru: "Эдгар", en: "Edgar" },
  "Aurelia": { ru: "Аурелия", en: "Aurelia" },
  "Chiz": { ru: "Чиз", en: "Chiz" },
  "Lacrimosa": { ru: "Лакримоза", en: "Lacrimosa" },
  "Shinku": { ru: "Шинку", en: "Shinku" },
  "Iroi": { ru: "Ирой", en: "Iroi" },

  // Типы блюд и категории
  "Beverages": { ru: "Напитки", en: "Beverages" },
  "Main Dishes": { ru: "Основные блюда", en: "Main Dishes" },
  "Desserts": { ru: "Десерты", en: "Desserts" },
  "Fruit": { ru: "Фрукты", en: "Fruit" },
  "Dish Types": { ru: "Типы блюд", en: "Dish Types" },
  "Categories": { ru: "Категории", en: "Categories" },
  "Ingredients": { ru: "Ингредиенты", en: "Ingredients" },

  // Валюта и навыки
  "Fons": { ru: "Фонс", en: "Fons" },
  "Price_Flat": { ru: "Цена", en: "Price" },
  "Traffic_Flat": { ru: "Трафик", en: "Traffic" },
  "Price_Multiply": { ru: "Множ. цены", en: "Price Mult." },
  "Traffic_Multiply": { ru: "Множ. трафика", en: "Traffic Mult." },
  "Any": { ru: "Любой", en: "Any" },
  "None": { ru: "— Нет —", en: "— None —" },

  // UI элементы
  "Select All": { ru: "Выбрать все", en: "Select All" },
  "Reset all": { ru: "Сбросить все", en: "Reset All" },
  "Set all L1": { ru: "Установить все L1", en: "Set all L1" },
  "Set all L2": { ru: "Установить все L2", en: "Set all L2" },
  "No skills": { ru: "Нет навыков", en: "No skills" },
  "No active skills": { ru: "Нет активных навыков", en: "No active skills" },
  "Skill": { ru: "Навык", en: "Skill" },
  "Price bonus": { ru: "Бонус к цене", en: "Price bonus" },
  "Traffic bonus": { ru: "Бонус к трафику", en: "Traffic bonus" },
  "to price": { ru: "к цене", en: "to price" },
  "to traffic": { ru: "к трафику", en: "to traffic" },
  "Trend": { ru: "Тренд", en: "Trend" },
  "Traffic": { ru: "Трафик", en: "Traffic" },
  "Price buff": { ru: "Бонус цены", en: "Price buff" },
  "Price multiplier": { ru: "Множитель цены", en: "Price multiplier" },
  "Total Income (Displayed In-game)": { ru: "Общий доход (как в игре)", en: "Total Income (Displayed In-game)" },
  "Total Income (Actual)": { ru: "Общий доход (реальный)", en: "Total Income (Actual)" },
  "hour": { ru: "час", en: "hour" },
  "Best menu": { ru: "Лучшее меню", en: "Best menu" },
  "Character bonuses": { ru: "Бонусы персонажей", en: "Character bonuses" },

  // Дополнительные UI
  "site_title": { ru: "Кафе \"Ориген\"", en: "Cafe \"Origen\"" },
  "site_subtitle": { ru: "ОПТИМИЗАТОР РОСТЕРА", en: "ROSTER OPTIMIZER" },
  "tab_optimizer": { ru: "Оптимизатор", en: "Optimizer" },
  "tab_dishes": { ru: "Блюда", en: "Dishes" },
  "tab_characters": { ru: "Персонажи", en: "Characters" },
  "settings_title": { ru: "Настройки", en: "Settings" },
  "cafes_owned": { ru: "Кафе в собственности", en: "Cafes Owned" },
  "cafe_1": { ru: "1 кафе", en: "1 cafe" },
  "cafe_2": { ru: "2 кафе", en: "2 cafes" },
  "cafe_3": { ru: "3 кафе", en: "3 cafes" },
  "cafe_4": { ru: "4 кафе", en: "4 cafes" },
  "cafe_5": { ru: "5 кафе", en: "5 cafes" },
  "cafes_hint": { ru: "Макс. блюд и персонажей", en: "Max dishes and characters" },
  "trend_category": { ru: "Текущий тренд", en: "Current Trend" },
  "trend_bonus": { ru: "Бонус тренда (+Fons)", en: "Trend Bonus (+Fons)" },
  "popularity_bonus": { ru: "Бонус популярности", en: "Popularity Bonus" },
  "popularity_hint": { ru: "Множитель дохода", en: "Income multiplier" },
  "hotori_decor": { ru: "Декор: Кошка Хотори (+1% трафика)", en: "Hotori Cat Decor +1% traffic" },
  "btn_calculate": { ru: "Рассчитать", en: "Calculate" },
  "results_title": { ru: "Результаты", en: "Results" },
  "results_hint": { ru: "Настройте параметры и запустите оптимизатор", en: "Adjust settings and run optimizer" },
  "placeholder_text": { ru: "Настройте параметры и запустите оптимизатор, чтобы увидеть лучший состав.", en: "Adjust settings and run optimizer to see the best roster." },
  "roster_dishes": { ru: "Блюда", en: "Dishes" },
  "roster_characters": { ru: "Персонажи", en: "Characters" },
  "roster_owned": { ru: "в наличии", en: "owned" },
  "roster_slots": { ru: "слотов", en: "slots" },
  "total_count": { ru: "всего", en: "total" },
  "logic_credit": { ru: "Logic:", en: "Logic:" },
  "nav_home": { ru: "На главную", en: "Home" },
  "nav_calculator": { ru: "Калькулятор", en: "Calculator" },
  "nav_characters": { ru: "Персонажи", en: "Characters" },
  "nav_tier_list": { ru: "Тир Лист", en: "Tier List" },
  "nav_changelog": { ru: "Список изменений", en: "Changelog" },
  "nav_settings": { ru: "Настройки", en: "Settings" },
  "btn_support": { ru: "Поддержать", en: "Support" },
  "btn_github": { ru: "GitHub", en: "GitHub" },
  "app_credits": { ru: "App by Dizzlok", en: "App by Dizzlok" }
};

// Функция получения текущего языка
function getLang() {
  return localStorage.getItem('lang') || 'ru';
}

// Универсальная функция перевода — ВОЗВРАЩАЕТ СТРОКУ!
function t(key) {
  if (!key) return "";
  const lang = getLang();
  if (TRANSLATIONS[key] && typeof TRANSLATIONS[key] === 'object') {
    return TRANSLATIONS[key][lang] || TRANSLATIONS[key].ru || key;
  }
  // Если это уже строка (не объект), возвращаем как есть
  return TRANSLATIONS[key] || key;
}

// Функция обновления всех текстов на странице
function applyTranslations() {
  const lang = getLang();
  document.documentElement.setAttribute('data-current-lang', lang);

  // Переводим все элементы с data-ui
  document.querySelectorAll('[data-ui]').forEach(el => {
    const key = el.getAttribute('data-ui');
    const translation = t(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Обновляем активную кнопку языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Экспорт
window.TRANSLATIONS = TRANSLATIONS;
window.getLang = getLang;
window.t = t;
window.applyTranslations = applyTranslations;