# Інформаційна система підтримки спортивних тренувань і харчування

**Information System for Supporting Sports Training and Nutrition**

Landing-сторінка для бакалаврської роботи (Лабораторна робота №2). Презентує мету, завдання, технологічний стек та очікувані результати проєкту MSportFit — україномовного вебзастосунку, що поєднує тренувальні програми, каталог вправ, довідник продуктів і калькулятори BMI/TDEE/БЖВ.

## Посилання

| Ресурс | URL |
|--------|-----|
| GitHub Pages | <https://mishasamonov.github.io/msportfit-landing/> |
| Landing-репозиторій | <https://github.com/mishasamonov/msportfit-landing> |
| Прототип (демо) | <https://github.com/mishasamonov/MSportFit_demo> |

## Локальний запуск

Відкрити `index.html` напряму в браузері або запустити статичний сервер:

```bash
npx serve .
```

## Стратегія гілкування — GitHub Flow

- `main` — стабільна гілка (production-ready)
- `feature/*` — гілки для реалізації окремих етапів
- Після завершення етапу — Pull Request → merge в `main` → тег версії

## Теги версій

| Тег | Етап |
|-----|------|
| `v0.1` | Stage 1 — базова структура, SEO, robots/sitemap |
| `v0.2` | Stage 2 — accessibility, Open Graph, Schema.org |
| `v0.3` | Stage 3 — контент, i18n (UA/EN), full-text.html |
| `v1.0` | Stage 4 — адаптивний дизайн, GitHub Pages deploy |
