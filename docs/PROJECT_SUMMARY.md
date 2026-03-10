# OnlyVet - Проект веб-сайта

## 📁 Информация о проекте

- **Папка проекта:** `~/onlyvet`
- **GitHub:** https://github.com/Stalser/Onlyvet-news3.git
- **Vercel:** https://onlyvet-news3.vercel.app
- **Технологии:** Next.js 15.1.0 + TypeScript + Tailwind CSS

## 🎨 Дизайн

- **Primary:** #4A90A4
- **Secondary:** #7B8FA3
- **Primary Light:** #E8F4F8

## 📄 Созданные страницы

- `/` — Главная с каруселями
- `/services` — Услуги и цены (28 услуг)
- `/services/[id]` — Детальная страница услуги
- `/doctors` — Врачи (4 врача)
- `/doctors/[id]` — Страница врача
- `/reviews` — Отзывы
- `/booking` — Запись на консультацию
- `/documents/terms` — Пользовательское соглашение
- `/documents/privacy` — Политика конфиденциальности

## 🔧 Команды для запуска

```bash
cd ~/onlyvet
npm run dev
```

Открыть: http://localhost:3000

## 🚀 Деплой на GitHub

```bash
cd ~/onlyvet
git add .
git commit -m "Описание изменений

Co-authored-by: Qwen-Coder <qwen-coder@alibabacloud.com>"
git push
```

## 📦 Vercel

Автоматический деплой при push в main ветку.

## 📝 Важные файлы

- `src/app/layout.tsx` — основной layout (шрифт Inter)
- `src/app/page.tsx` — главная страница
- `src/app/services/page.tsx` — услуги с фильтрами
- `src/components/Header.tsx` — шапка
- `src/components/Footer.tsx` — подвал
- `src/components/CookieBanner.tsx` — баннер cookies
- `src/components/Carousel.tsx` — карусель
- `src/components/FadeIn.tsx` — анимация появления
- `src/data/doctors.ts` — данные врачей
- `public/images/doctors/` — фото врачей (SVG)
- `public/favicon.ico` — иконка сайта

## 🎯 Функционал

- ✅ Карусели (отзывы, врачи, услуги)
- ✅ Фильтры услуг (по категориям клиентов и типу услуг)
- ✅ Поиск по услугам
- ✅ Цветовое кодирование (частным, заводчикам, приютам)
- ✅ Мобильная адаптация
- ✅ Cookie баннер
- ✅ 28 услуг из прайса
- ✅ Отдельные страницы для каждой услуги

## 📞 Контакты

- Email: consult@onlyvet.ru
- Telegram: @onlyvet_clinic
