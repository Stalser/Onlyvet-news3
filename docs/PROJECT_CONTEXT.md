# 📖 OnlyVet Project Context

**Дата создания:** 9 марта 2026 г.  
**Последнее обновление:** 9 марта 2026 г.  
**Статус:** ✅ Работает

---

## 🌐 **Проект:**

- **Название:** OnlyVet — ветеринарные онлайн-консультации
- **Технологии:** Next.js 16.1.6 + TypeScript + Tailwind CSS
- **Хостинг:** Vercel
- **URL:** https://onlyvet-news3.vercel.app
- **GitHub:** https://github.com/Stalser/Onlyvet-news3

---

## 🎨 **Дизайн:**

- **Primary:** #4A90A4 (бирюзовый)
- **Secondary:** #7B8FA3 (серо-синий)
- **Primary Light:** #E8F4F8 (светло-бирюзовый)
- **Шрифт:** Inter (кириллица)

---

## 📁 **Структура проекта:**

```
~/onlyvet/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Главная страница
│   │   ├── layout.tsx            # Основной layout
│   │   ├── globals.css           # Глобальные стили
│   │   ├── services/
│   │   │   ├── page.tsx          # Услуги и цены (28 услуг)
│   │   │   └── [id]/page.tsx     # Детальная страница услуги
│   │   ├── doctors/
│   │   │   ├── page.tsx          # Врачи (4 врача)
│   │   │   └── [id]/page.tsx     # Страница врача
│   │   ├── reviews/page.tsx      # Отзывы
│   │   ├── booking/page.tsx      # Запись на консультацию
│   │   ├── blog/
│   │   │   ├── page.tsx          # Блог со статьями
│   │   │   └── [slug]/page.tsx   # Статья блога
│   │   ├── how-it-works/page.tsx # Как это работает
│   │   ├── faq/page.tsx          # FAQ
│   │   ├── setup/page.tsx        # Настройка приложений
│   │   ├── documents/            # Документы
│   │   │   ├── terms/page.tsx    # Пользовательское соглашение
│   │   │   └── privacy/page.tsx  # Политика конфиденциальности
│   │   ├── 404/page.tsx          # 404 страница
│   │   └── 429/page.tsx          # Too Many Requests
│   ├── components/
│   │   ├── Header.tsx            # Шапка с навигацией
│   │   ├── Footer.tsx            # Подвал
│   │   ├── CookieBanner.tsx      # Cookie баннер
│   │   ├── PhoneModal.tsx        # Модальное окно телефона
│   │   ├── Carousel.tsx          # Карусель
│   │   ├── FadeIn.tsx            # Анимация появления
│   │   └── ...
│   ├── data/
│   │   ├── doctors.ts            # Данные врачей
│   │   └── reviews.ts            # Данные отзывов
│   └── middleware.ts             # Rate limiting, security headers
├── public/
│   ├── images/
│   │   ├── logo.svg              # Логотип SVG
│   │   ├── logo-header.png       # Логотип для шапки
│   │   ├── doctors/              # Фото врачей (SVG)
│   │   └── favicon.ico           # Иконка сайта
│   └── documents/pricelist.docx  # Прайс-лист
├── docs/
│   ├── CONTEXT.md                # Контекст проекта
│   ├── SECURITY.md               # Безопасность
│   └── PROJECT_SUMMARY.md        # Краткое описание
├── MCP_SETUP.md                  # Инструкция по MCP
├── package.json
└── README.md
```

---

## 👥 **Врачи (4 человека):**

1. **Курилов Андрей Степанович** (elvin) — онкология, сложные случаи
2. **Диана Чемерилова** (diana) — терапия кошек и собак
3. **Иванов Олег Сергеевич** (oleg) — диагностика, УЗИ, анализы
4. **Федосова Мария Александровна** (maria) — терапия, дерматология

---

## 📋 **Услуги (28 позиций):**

### **Категории клиентов:**
- Частным лицам (синий цвет)
- Заводчикам (оранжевый цвет)
- Приютам и волонтёрам (зелёный цвет)

### **Типы услуг:**
- Консультации (первичная, расширенная, экстренная, повторная)
- Второе мнение
- Диагностика (анализы, УЗИ, рентген)
- Диетология
- Узкие специалисты
- Хронические пациенты
- Подписки (месячные пакеты)

---

## 🛠️ **MCP Конфигурация:**

**Файл:** `~/.qwen/mcp-config.json`

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@context7/mcp-server"],
      "env": {
        "CONTEXT7_API_KEY": "[REDACTED]"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "[REDACTED]"
      }
    },
    "vercel": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-vercel"],
      "env": {
        "VERCEL_TOKEN": "[REDACTED]"
      }
    }
  }
}
```

### **Статус MCP:**
- ✅ Context7 настроен (токен в `~/.qwen/mcp-config.json`)
- ✅ GitHub настроен (токен в `~/.qwen/mcp-config.json`)
- ✅ Vercel настроен (токен в `~/.qwen/mcp-config.json`)
- ⚠️ Требуется перезапуск Qwen Code

---

## 🚀 **Команды для разработки:**

```bash
# Локальный запуск
cd ~/onlyvet
npm run dev
# Открыть: http://localhost:3000

# Деплой на GitHub
git add .
git commit -m "Описание изменений"
git push

# Vercel деплоится автоматически при push
```

---

## 🔧 **Последние изменения:**

1. ✅ Логотип в шапке — SVG вместо PNG
2. ✅ Кнопка телефона в мобильном меню
3. ✅ Цифры шагов консультации — более видимые (text-primary)
4. ✅ Rate limiting увеличен до 100 запросов/мин
5. ✅ Страница 429 (Too Many Requests)
6. ✅ Блог с фильтрами и поиском
7. ✅ Страницы услуг с детальным описанием
8. ✅ Страница настройки приложений (Яндекс.Телемост/Мессенджер)
9. ✅ Тёмная тема (откатилась, кнопка-заглушка осталась)
10. ✅ Модальное окно телефона с подтверждением

---

## 📞 **Контакты для сайта:**

- **Email:** consult@onlyvet.ru
- **Telegram:** @onlyvet_clinic
- **Телефон:** +7 900 000-00-00

---

## 🎯 **Что нужно сделать после перезапуска:**

1. **Проверьте MCP:**
   ```
   Покажи документацию Next.js по middleware
   ```

2. **Проверьте сайт:**
   - https://onlyvet-news3.vercel.app
   - https://onlyvet-news3.vercel.app/blog
   - https://onlyvet-news3.vercel.app/services

3. **Если что-то сломалось:**
   - Откройте этот файл
   - Скопируйте контекст
   - Вставьте в новый диалог

---

## 📚 **Важные файлы:**

| Файл | Где | Зачем |
|------|-----|-------|
| `PROJECT_CONTEXT.md` | `~/onlyvet/docs/` | Этот файл |
| `MCP_SETUP.md` | `~/onlyvet/` | Инструкция MCP |
| `mcp-config.json` | `~/.qwen/` | Конфигурация MCP |
| `SECURITY.md` | `~/onlyvet/docs/` | Безопасность |

---

**Создано:** 9 марта 2026 г.  
**Для:** Перезапуска Qwen Code с сохранением контекста
