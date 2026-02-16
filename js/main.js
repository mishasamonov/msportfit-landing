// MSportFit Landing - Main JavaScript (i18n + a11y)
(function () {
  'use strict';

  /* ==================== i18n Dictionary ==================== */
  var translations = {
    ua: {
      'meta.title':
        'Інформаційна система підтримки спортивних тренувань і харчування — MSportFit',
      'meta.description':
        'MSportFit — україномовний вебзастосунок, що поєднує тренувальні програми, каталог вправ із порадами та відео, довідник продуктів і калькулятори BMI/TDEE/БЖВ. Мета — зменшити «інфошум» і дати користувачу єдиний план.',
      'meta.keywords':
        'інформаційна система, вебзастосунок, спортивні тренування, харчування, BMI, TDEE, БЖВ, довідник продуктів, каталог вправ',

      'nav.skipToMain': 'Перейти до основного вмісту',
      'nav.langUa': 'Перемкнути на українську мову',
      'nav.langEn': 'Перемкнути на англійську мову',

      'hero.title':
        'Інформаційна система підтримки спортивних тренувань і харчування',
      'hero.subtitle':
        'Information System for Supporting Sports Training and Nutrition',
      'hero.description':
        'MSportFit — україномовний вебзастосунок, що поєднує тренувальні програми, каталог вправ із порадами та відео, довідник продуктів і калькулятори BMI/TDEE/БЖВ. Мета — зменшити «інфошум» і дати користувачу єдиний план.',
      'hero.keywords':
        '<strong>Ключові слова:</strong> інформаційна система, вебзастосунок, спортивні тренування, харчування, BMI, TDEE, БЖВ, довідник продуктів, каталог вправ',
      'hero.ctaDemo': 'Переглянути демо',
      'hero.ctaFullText': 'Повний текст роботи',

      'relevance.title': 'Актуальність дослідження',
      'relevance.content':
        "Сучасні користувачі стикаються з величезною кількістю розрізнених джерел інформації про фітнес і харчування: одні застосунки пропонують тренування, інші — калькулятори калорій, треті — каталоги продуктів. Це створює «інформаційний шум» і ускладнює планування. MSportFit об\u0027єднує ключові функції в єдиній україномовній платформі, надаючи персоналізовані рекомендації та зручний доступ до всіх необхідних інструментів.",

      'goals.title': 'Мета та завдання дослідження',
      'goals.goalTitle': 'Мета:',
      'goals.goalText':
        'Розроблення україномовного адаптивного вебзастосунку MSportFit як інформаційної системи підтримки тренувань і харчування, що зменшує \u00abінформаційний шум\u00bb і забезпечує персоналізований вибір програм, розрахунки BMI, BMR\u2192TDEE та БЖВ, а також автентифікацію, профіль і збереження \u00abобраного\u00bb через API.',
      'goals.tasksTitle': 'Основні завдання:',
      'goals.task1':
        'Проаналізувати предметну область, аналоги та сформувати вимоги/сценарії.',
      'goals.task2':
        'Спроєктувати архітектуру, модулі та модель даних (користувачі, програми, вправи, продукти, обране).',
      'goals.task3':
        'Реалізувати клієнтську частину (React/Vite), адаптивний та доступний інтерфейс.',
      'goals.task4':
        'Реалізувати серверну частину (REST API), реєстрацію/вхід та \u00abобране\u00bb з збереженням у БД.',
      'goals.task5':
        'Імплементувати калькулятори (BMI, BMR\u2192TDEE, БЖВ), довідники та забезпечити деплой/документацію.',

      'methodology.title': 'Методологія дослідження',
      'methodology.content':
        'Аналіз вимог; проєктування UI/UX; реалізація прототипу; перевірка коректності формул і сценаріїв взаємодії.',

      'tech.title': 'Технологічний стек',
      'tech.content':
        'React + Vite, JavaScript, SCSS; сервер: Node.js/Express; БД: PostgreSQL (Prisma); дані: JSON \u2192 API.',

      'results.title': 'Очікувані результати',
      'results.item1': 'Повноцінний вебзастосунок з адаптивним інтерфейсом.',
      'results.item2': 'Тренувальні програми та каталог вправ із порадами і відео.',
      'results.item3': 'Довідник продуктів (ккал та БЖВ на 100 г).',
      'results.item4': 'Калькулятори BMI, BMR/TDEE та БЖВ.',
      'results.item5': 'FAQ та базові рекомендації.',
      'results.item6':
        'Акаунт користувача: реєстрація/вхід, профіль, збереження \u00abобраного\u00bb через API.',

      'demo.title': 'Демо прототипу',
      'demo.description':
        'Прототип інформаційної системи MSportFit доступний у відкритому репозиторії на GitHub. Ви можете переглянути код, завантажити проєкт та протестувати функціональність.',
      'demo.btnRepository': 'Відкрити репозиторій',
      'demo.galleryTitle': 'Знімки екрана',
      'demo.shot1': 'Головна сторінка',
      'demo.shot2': 'Тренувальні програми',
      'demo.shot3': 'Деталі програми',
      'demo.shot4': 'Каталог вправ',
      'demo.shot5': 'Відео вправи',
      'demo.shot6': 'Деталі вправи',
      'demo.shot7': 'Калькулятор BMI',
      'demo.shot8': 'Калькулятор TDEE',
      'demo.shot9': 'Калькулятор БЖВ',
      'demo.shot10': 'Довідник продуктів',
      'demo.shot11': 'FAQ',
      'demo.shot12': 'Реєстрація',

      'contact.title': 'Контакти',
      'contact.authorLabel': 'Автор:',
      'contact.authorName': 'Самонов Михайло Володимирович',
      'contact.emailLabel': 'Email:',
      'contact.repositoryLabel': 'Репозиторій:',
      'contact.fullTextLabel': 'Повний текст:',
      'contact.fullTextLink': 'Переглянути повний текст роботи',

      'footer.rights': 'Всі права захищені.',
      'footer.thesis':
        'Бакалаврська робота з інформаційної системи підтримки спортивних тренувань і харчування'
    },

    en: {
      'meta.title':
        'Information System for Supporting Sports Training and Nutrition — MSportFit',
      'meta.description':
        'MSportFit is a Ukrainian-language web app that combines training programs, an exercise catalog with tips and videos, a nutrition product table, and BMI/TDEE/macros calculators to reduce information noise and help users plan workouts and diet in one place.',
      'meta.keywords':
        'information system, web app, sports training, nutrition, BMI, TDEE, macros, product catalog, exercise catalog',

      'nav.skipToMain': 'Skip to main content',
      'nav.langUa': 'Switch to Ukrainian',
      'nav.langEn': 'Switch to English',

      'hero.title':
        'Information System for Supporting Sports Training and Nutrition',
      'hero.subtitle':
        'Інформаційна система підтримки спортивних тренувань і харчування',
      'hero.description':
        'MSportFit is a Ukrainian-language web app that combines training programs, an exercise catalog with tips and videos, a nutrition product table, and BMI/TDEE/macros calculators to reduce information noise and help users plan workouts and diet in one place.',
      'hero.keywords':
        '<strong>Keywords:</strong> information system, web app, sports training, nutrition, BMI, TDEE, macros, product catalog, exercise catalog',
      'hero.ctaDemo': 'View Demo',
      'hero.ctaFullText': 'Full Thesis Text',

      'relevance.title': 'Research Relevance',
      'relevance.content':
        'Modern users face a huge amount of scattered information sources about fitness and nutrition: some apps offer workouts, others \u2014 calorie calculators, and others \u2014 product catalogs. This creates \u201cinformation noise\u201d and complicates planning. MSportFit unites key functions in a single Ukrainian-language platform, providing personalized recommendations and convenient access to all necessary tools.',

      'goals.title': 'Research Goal and Objectives',
      'goals.goalTitle': 'Goal:',
      'goals.goalText':
        'Developing a Ukrainian-language adaptive web application MSportFit as an information system for training and nutrition support that reduces "information noise" and provides personalized program selection, BMI, BMR\u2192TDEE and macros calculations, as well as authentication, profile, and saving favorites via API.',
      'goals.tasksTitle': 'Main Objectives:',
      'goals.task1':
        'Analyze the subject area, analogues, and define requirements/scenarios.',
      'goals.task2':
        'Design the architecture, modules, and data model (users, programs, exercises, products, favorites).',
      'goals.task3':
        'Implement the client side (React/Vite), adaptive and accessible interface.',
      'goals.task4':
        'Implement the server side (REST API), registration/login, and favorites with database persistence.',
      'goals.task5':
        'Implement calculators (BMI, BMR\u2192TDEE, macros), directories, and ensure deployment/documentation.',

      'methodology.title': 'Research Methodology',
      'methodology.content':
        'Requirements analysis; UI/UX design; prototype implementation; verification of formula correctness and interaction scenarios.',

      'tech.title': 'Tech Stack',
      'tech.content':
        'React + Vite, JavaScript, SCSS; server: Node.js/Express; DB: PostgreSQL (Prisma); data: JSON \u2192 API.',

      'results.title': 'Expected Results',
      'results.item1': 'Full-featured web application with adaptive interface.',
      'results.item2': 'Training programs and exercise catalog with tips and videos.',
      'results.item3': 'Product directory (kcal and macros per 100 g).',
      'results.item4': 'BMI, BMR/TDEE, and macros calculators.',
      'results.item5': 'FAQ and basic recommendations.',
      'results.item6':
        'User account: registration/login, profile, saving favorites via API.',

      'demo.title': 'Demo Prototype',
      'demo.description':
        'The MSportFit information system prototype is available in an open GitHub repository. You can view the code, download the project, and test the functionality.',
      'demo.btnRepository': 'Open Repository',
      'demo.galleryTitle': 'Screenshots',
      'demo.shot1': 'Home Page',
      'demo.shot2': 'Training Programs',
      'demo.shot3': 'Program Details',
      'demo.shot4': 'Exercise Catalog',
      'demo.shot5': 'Exercise Video',
      'demo.shot6': 'Exercise Details',
      'demo.shot7': 'BMI Calculator',
      'demo.shot8': 'TDEE Calculator',
      'demo.shot9': 'Macros Calculator',
      'demo.shot10': 'Product Directory',
      'demo.shot11': 'FAQ',
      'demo.shot12': 'Registration',

      'contact.title': 'Contacts',
      'contact.authorLabel': 'Author:',
      'contact.authorName': 'Mykhailo Samonov',
      'contact.emailLabel': 'Email:',
      'contact.repositoryLabel': 'Repository:',
      'contact.fullTextLabel': 'Full text:',
      'contact.fullTextLink': 'View full thesis text',

      'footer.rights': 'All rights reserved.',
      'footer.thesis':
        "Bachelor's thesis on information system for supporting sports training and nutrition"
    }
  };

  /* ==================== State ==================== */
  var currentLang = localStorage.getItem('msportfit-lang') || 'ua';

  /* ==================== DOM helpers ==================== */
  function updateMetaTag(attr, attrValue, content) {
    var el = document.querySelector('meta[' + attr + '="' + attrValue + '"]');
    if (el) el.setAttribute('content', content);
  }

  function updateSchemaOrg(lang, dict) {
    var el = document.getElementById('schema-jsonld');
    if (!el) return;
    var data = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MSportFit',
      description: dict['meta.description'],
      url: 'https://example.com/',
      inLanguage: lang === 'ua' ? 'uk' : 'en',
      author: { '@type': 'Person', name: dict['contact.authorName'] },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://example.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };
    el.textContent = JSON.stringify(data, null, 2);
  }

  /* ==================== Core i18n ==================== */
  function updateContent(lang) {
    var dict = translations[lang];
    if (!dict) return;

    // Text content (innerHTML for elements that may contain <strong>)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Meta content attribute updates
    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      if (dict[key] !== undefined) el.setAttribute('content', dict[key]);
    });

    // aria-label updates
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    // Document title
    document.title = dict['meta.title'];

    // HTML lang
    document.documentElement.setAttribute('lang', lang === 'ua' ? 'uk' : 'en');

    // OG locale
    updateMetaTag('property', 'og:locale', lang === 'ua' ? 'uk_UA' : 'en_US');

    // Schema.org
    updateSchemaOrg(lang, dict);

    // Persist choice
    localStorage.setItem('msportfit-lang', lang);
    currentLang = lang;
  }

  function switchLanguage(lang) {
    if (lang === currentLang) return;

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    updateContent(lang);
  }

  /* ==================== Init ==================== */
  function init() {
    // Apply saved language
    updateContent(currentLang);

    // Mark active button
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === currentLang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Attach click handlers
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchLanguage(this.getAttribute('data-lang'));
      });
    });

    // Footer year
    var yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
