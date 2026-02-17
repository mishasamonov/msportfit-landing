# ЛР2 — Landing для бакалаврської роботи MSportFit (GitHub Flow)

## Обрана стратегія гілкування: GitHub Flow
- main — стабільна гілка
- feature/* — гілки для реалізації етапів
- після завершення етапу: merge в main + tag версії

## Журнал виконання (коротко)
- (дата/час) init: створено репозиторій і підготовлено журнал LAB2_LOG.md
- Stage 1: створено базову структуру проекту (HTML5, CSS, JS), додано SEO мета-теги, налаштовано robots.txt/sitemap.xml, створено placeholder SVG та favicons
- Stage 2: додано accessibility покращення (skip-link, ARIA labels, семантична структура, focus-visible стилі), Open Graph/Twitter meta-теги та Schema.org JSON-LD для SEO
- Stage 3: реалізовано повний контент презентації дипломної роботи MSportFit з двомовним інтерфейсом (UA/EN); додано систему i18n без бібліотек; створено секції Hero, Актуальність, Мета та завдання, Методологія, Очікувані результати, Демо, Контакти; динамічне оновлення meta/OG/Twitter/Schema.org при зміні мови; створено full-text.html; збережено a11y/SEO зі Stage 2
- Stage 4: повне оновлення стилів та адаптивності. Mobile-first CSS з breakpoints 480px/768px/1024px; покращена типографіка (масштабована шкала h1/h2/h3, line-height, letter-spacing, system fonts); ключові слова відображаються як chip/badge-елементи; секції обгорнуті в card-компоненти з border/shadow; технологічний стек — grid з окремими tech-картками; додано subtle градієнти (hero, footer, section-alt); sticky header з backdrop-filter; responsive images (width:100%, height:auto, lazy loading); збережено focus-visible стилі та кольоровий контраст; i18n оновлено для нових ключів (keywordsChips, tech.*Label); HTML валідний, meta/OG/Twitter/Schema.org працюють з language toggle
