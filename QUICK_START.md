# ⚡ OnlyVet — Шпаргалка для нового чата

## 🚀 Быстрый старт

### 1. Прочитать контекст
```bash
read_file: C:\Users\VPN\Onlyvet-news3\CONTEXT_FOR_NEW_CHAT.md
```

### 2. Проверить GitHub
- Репозиторий: https://github.com/Stalser/Onlyvet-news3
- Ветка: main
- Автодеплой на Vercel при push

### 3. Проверить Vercel
- URL: https://onlyvet-news3.vercel.app
- Деплой: 2-4 минуты после push

---

## 📊 Что работает

| Категория | Количество | Статус |
|-----------|------------|--------|
| **Врачи** | 6 | ✅ Реальные специальности |
| **Страницы** | 20+ | ✅ Все работают |
| **Форма записи** | 100% | ✅ Файлы + видео + архивы |
| **Мобильная версия** | 95% | ✅ Адаптивные фильтры |
| **MCP Серверов** | 19 | ✅ 3 настроены |
| **Skills** | 15 | ✅ Готовы |
| **GitHub** | ✅ | ✅ Привязан |
| **Vercel** | ✅ | ✅ Автодеплой |

---

## 🔧 Основные команды

### Работа с кодом
```bash
cd C:\Users\VPN\Onlyvet-news3
npm run dev      # Запуск разработки
npm run build    # Сборка
npm run lint     # Линтинг
```

### Деплой (автоматический)
```bash
git add .
git commit -m "Описание изменений"
git push origin main
# Vercel задеплоит через 2-4 минуты
```

### MCP запросы
```javascript
// GitHub
POST http://localhost:3000
{"action":"call","endpoint":"/repos/Stalser/Onlyvet-news3"}

// Vercel
POST http://localhost:3001
{"action":"call","endpoint":"/v9/projects"}

// Context7
POST http://localhost:3006
{"action":"search","library":"nextjs","query":"middleware"}
```

---

## 📁 Важные файлы

| Файл | Где | Зачем |
|------|-----|-------|
| `CONTEXT_FOR_NEW_CHAT.md` | Проект | Полный контекст |
| `WORK_HISTORY.md` | Проект | История изменений |
| `doctors.ts` | `src/data/` | 6 врачей |
| `services.ts` | `src/data/` | 4 услуги |
| `booking/page.tsx` | `src/app/` | Форма записи |
| `mcp.json` | `.qwen/` | 19 MCP серверов |

---

## 👥 Врачи (6 человек)

| ID | Врач | Специальность |
|----|------|--------------|
| `elvin` | Курилов Андрей Степанович | Терапевт |
| `diana` | Диана Чемерилова | Терапевт |
| `oleg` | Иванов Олег Сергеевич | Диагност |
| `maria` | Федосова Мария Александровна | Дерматолог |
| `alexey` | Волков Алексей Дмитриевич | Хирург |
| `elena` | Козлова Елена Викторовна | Кардиолог |

---

## 📝 Форма записи — возможности

✅ Выбор врача  
✅ Выбор услуги  
✅ Загрузка файлов (PDF, JPG, PNG до 10MB)  
✅ Загрузка видео (MP4, MOV, AVI до 50MB)  
✅ Загрузка архивов (ZIP, RAR до 100MB)  
✅ Автосохранение черновика  
✅ Валидация email и телефона  
✅ RGPD/152-ФЗ согласия  

---

## ⚠️ 152-ФЗ — Важно!

**Проблема:** Vercel не в России → персданные не должны храниться на Vercel

**Временное решение:**
- Заявки → Telegram (не храним в БД)
- Или Email (не храним)

**Постоянное решение:**
- Российский хостинг (Timeweb/Beget ~250₽/мес)
- PostgreSQL в России
- Админка для управления заявками

---

## 🔑 API Keys

### Настроенные ✅
```
Context7: ctx7sk-*** (см. .qwen/mcp-servers/.env)
GitHub: ghp_*** (см. .qwen/mcp-servers/github-mcp.js)
Vercel: vcp_*** (см. .qwen/mcp-servers/vercel-mcp.js)
```

### Требуют настройки ⚠️
```env
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
```

---

## 🎯 Приоритеты

### 🔴 Критичные (сейчас)
1. Настроить Telegram бота
2. Решить 152-ФЗ (РФ хостинг)

### 🟡 Важные (потом)
3. Загрузить фото врачей
4. Яндекс.Метрика

### 🟢 Желательные (после запуска)
5. Домен onlyvet.ru
6. SSL сертификат

---

## 📞 Контакты

- **Email:** consult@onlyvet.ru
- **Telegram:** @onlyvet_clinic
- **GitHub:** https://github.com/Stalser/Onlyvet-news3
- **Vercel:** https://onlyvet-news3.vercel.app

---

**Версия:** 5.0  
**Дата:** 10 марта 2026 г. (22:30)  
**Готовность:** 90%
