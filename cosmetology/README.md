# ÉLAN Clinic

Преміальний сайт клініки естетичної косметології. Усі тексти та інтерфейс — українською мовою (`uk-UA`).

## Запуск

```bash
npm install
npm run dev
```

Для перевірки перед публікацією:

```bash
npm run lint
npm run typecheck
npm run build
```

## Що змінити перед запуском

- Контакти, адресу та графік: `components/layout/Footer.tsx`.
- Тексти, ціни, процедури, FAQ і відгуки: `data/content.ts`.
- Зображення наразі завантажуються з Unsplash; замініть URL у компонентах та `data/content.ts` на ліцензовані матеріали бренду або локальні файли в `public/images`.
- Форма має клієнтську валідацію імітує надсилання; підключіть CRM/API у `components/ui/AppointmentForm.tsx`.
