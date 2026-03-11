# 📋 ONLYVET NEWS3 — ПРОЕКТНАЯ ДОКУМЕНТАЦИЯ

**Дата обновления:** 11 марта 2026 г.  
**Статус:** ✅ Рабочий, задеплоен на Vercel  
**GitHub:** https://github.com/Stalser/Onlyvet-news3  
**Vercel:** https://onlyvet-news3.vercel.app

---

## 🚀 БЫСТРЫЙ СТАРТ

### Команды разработки
```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка production
npm run build

# Линтинг
npm run lint
```

### Деплой
- **Автоматический** при push в ветку `main` на GitHub
- Vercel автоматически деплоит через 2-5 минут
- После деплоя проверить: https://onlyvet-news3.vercel.app

---

## 📁 СТРУКТУРА ПРОЕКТА

```
Onlyvet-news3/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── page.tsx           # Главная страница
│   │   ├── reviews/           # Страница отзывов
│   │   ├── booking/           # Страница записи
│   │   ├── services/          # Услуги
│   │   ├── doctors/           # Врачи
│   │   ├── blog/              # Блог
│   │   ├── documents/         # Документы (оферта, политика)
│   │   └── ...
│   ├── components/            # React компоненты
│   │   ├── Footer.tsx        # Подвал сайта
│   │   ├── Header.tsx        # Шапка
│   │   ├── YandexWidget.tsx  # Виджет Метрики
│   │   └── ...
│   └── lib/                   # Утилиты
├── public/
│   └── images/
│       └── svg/              # Все SVG логотипы (36 файлов)
│           ├── vk-logo.svg
│           ├── telegram-logo.svg
│           ├── ok-sign-logo.svg
│           ├── instagram-sign-logo.svg
│           ├── phone-icon.svg
│           ├── email-icon.svg
│           └── ... (все версии logo2, logo3)
├── package.json
├── next.config.js
├── tailwind.config.js
└── .env.local               # Переменные окружения
```

---

## 🎨 ЦВЕТОВАЯ ПАЛИТРА

### Основные цвета (globals.css)
```css
--primary: #2C5F72;        /* Тёмно-бирюзовый */
--primary-dark: #1A3D4A;   /* Очень тёмный */
--primary-light: #D4E8ED;  /* Светлый фон */

--secondary: #7B8FA3;
--accent: #D4A574;

--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

---

## 🖼️ SVG ЛОГОТИПЫ

### Соцсети (используются на сайте)
| Файл | Где используется | Размер |
|------|-----------------|--------|
| `vk-logo2.svg` | Footer, Главная | 20x20, 64x64 |
| `telegram-logo2.svg` | Footer, Главная, Booking | 20x20, 64x64, 24x24 |
| `ok-sign-logo2.svg` | Footer, Главная | 20x20, 64x64 |
| `instagram-sign-logo2.svg` | Главная | 64x64 |

### Иконки контактов
| Файл | Где используется |
|------|-----------------|
| `phone-icon.svg` | Footer (телефон) |
| `email-icon.svg` | Footer (почта) |

### Все доступные логотипы (36 файлов в `/public/images/svg/`)
- **VK:** vk-logo.svg, vk-logo2.svg, vk-logo3.svg
- **Telegram:** telegram-logo.svg, telegram-logo2.svg, telegram-logo3.svg
- **OK:** ok-sign-logo.svg, ok-sign-logo2.svg, ok-sign-logo3.svg
- **Instagram:** instagram-sign-logo.svg, instagram-sign-logo2.svg, instagram-sign-logo3.svg
- **WhatsApp:** whatsapp-sign-logo.svg, whatsapp-sign-logo2.svg, whatsapp-sign-logo3.svg
- **Google Maps:** google-maps-sign-logo.svg, google-maps-sign-logo2.svg, google-maps-sign-logo3.svg
- **Google Play:** google-play-sign-logo.svg, google-play-sign-logo2.svg, google-play-sign-logo3.svg
- **App Store:** app-store-icon-logo.svg, app-store-icon-logo2.svg, app-store-icon-logo3.svg
- **Apple:** apple-logo.svg, apple-logo2.svg, apple-logo3.svg
- **Yandex Maps:** yandex-maps-logo.svg, yandex-maps-logo2.svg, yandex-maps-logo3.svg
- **2GIS:** 2gis-icon-logo.svg, 2gis-icon-logo2.svg, 2gis-icon-logo3.svg
- **Max Messenger:** max-messenger-sign-logo.svg, max-messenger-sign-logo2.svg, max-messenger-sign-logo3.svg

---

## 📝 ИСТОРИЯ ИЗМЕНЕНИЙ (11 марта 2026)

### Последняя правка
**Коммит:** `0bc537a` — "Add beautiful phone and email SVG icons"

**Что сделано:**
1. ✅ Созданы векторные SVG иконки для телефона и почты
2. ✅ Заменены эмодзи в Footer на SVG иконки
3. ✅ Все иконки теперь в одном стиле (#2C5F72)

### Предыдущие правки за день
1. **Фильтры отзывов (мобильная версия)**
   - Компактный вид для мобильных
   - Горизонтальный скролл кнопок
   - Кнопка "Написать отзыв" большая с текстом
   - Сортировка маленькая

2. **SVG логотипы соцсетей**
   - Добавлены 36 SVG файлов в `/public/images/svg/`
   - Обновлены пути в Footer, Главная, Booking
   - Все иконки без фона (прозрачные)

3. **Страница отзывов**
   - Удалён Flamp полностью
   - Оставлены: Все отзывы, Яндекс, 2ГИС, Google, Сайт
   - Реальные SVG логотипы источников

---

## 🔧 ТЕХНОЛОГИЧЕСКИЙ СТЕК

- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS 4
- **TypeScript:** ✅
- **Deployment:** Vercel
- **Analytics:** Yandex Metrika
- **Icons:** SVG (собственные)

---

## 📦 ЗАВИСИМОСТИ

### Основные
```json
{
  "next": "^16.1.6",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5"
}
```

### Dev
```json
{
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4",
  "next-sitemap": "^4.3.2"
}
```

---

## 🎯 КЛЮЧЕВЫЕ СТРАНИЦЫ

| Страница | Путь | Файл |
|----------|------|------|
| Главная | `/` | `src/app/page.tsx` |
| Отзывы | `/reviews` | `src/app/reviews/page.tsx` |
| Запись | `/booking` | `src/app/booking/page.tsx` |
| Услуги | `/services` | `src/app/services/page.tsx` |
| Врачи | `/doctors` | `src/app/doctors/page.tsx` |
| Блог | `/blog` | `src/app/blog/page.tsx` |
| Документы | `/documents` | `src/app/documents/page.tsx` |

---

## ⚠️ ВАЖНЫЕ ЗАМЕТКИ

### Проблемы и решения
1. **SVG не отображаются в некоторых браузерах**
   - ❌ Не использовать упрощённые path
   - ✅ Использовать оригинальные logo2.svg
   - ✅ Очищать кэш: Ctrl+Shift+R

2. **Next.js Image компонент и SVG**
   - ❌ Next.js Image не работает с некоторыми SVG
   - ✅ Использовать обычный `<img>` тег или Image с осторожностью

3. **Мобильная версия**
   - Все фильтры с горизонтальным скроллом
   - Кнопки с иконками + текст (скрыт на очень маленьких)
   - Compact режим для < 640px

### Переменные окружения (.env.local)
```
NEXT_PUBLIC_EMAIL=consult@onlyvet.ru
NEXT_PUBLIC_PHONE_TEL=+79000000000
NEXT_PUBLIC_PHONE_DISPLAY=+7 900 000-00-00
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
```

---

## 🔄 GIT WORKFLOW

```bash
# Внести изменения
git add -A
git commit -m "Описание изменений"
git push origin main

# Vercel задеплоит автоматически
```

### Последние коммиты
```
0bc537a — Add beautiful phone and email SVG icons
d92bc7a — Fix icons - use working logo2 versions
700921f — Fix SVG icons - restore proper paths
086fb70 — Remove backgrounds from social icons
63ac559 — Use new SVG icons from /images/svg folder
```

---

## 📞 КОНТАКТЫ ПРОЕКТА

- **Email:** consult@onlyvet.ru
- **Telegram:** @onlyvet_clinic
- **VK:** vk.com/onlyvet_clinic
- **OK:** ok.ru/onlyvet

---

## 🎨 UI КОМПОНЕНТЫ

### Кнопки
```tsx
// Primary кнопка
className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark"

// Secondary кнопка
className="px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary-light"
```

### Карточки
```tsx
className="bg-white rounded-2xl border-2 border-gray-100 hover:shadow-xl"
```

---

**Документация актуальна на 11 марта 2026 г.**  
**Следующее обновление:** при внесении крупных изменений
