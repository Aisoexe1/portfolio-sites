# TerraNova Agro

Корпоративний сайт аграрної компанії українською мовою.

## Запуск

```bash
npm install
npm run dev
```

## Перевірки

```bash
npm run lint
npm run typecheck
npm run build
```

## Дані перед запуском

- Контент, показники, новини й FAQ: `data/content.ts`.
- Контакти й вакансії: `components/layout/Footer.tsx`.
- Форма імітує відправлення; інтеграцію CRM додайте у `components/ui/LeadForm.tsx`.
- Фотографії Unsplash слід замінити на ліцензовані матеріали компанії або локальні файли в `public/images`.
