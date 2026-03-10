# ⚡ OnlyVet — Шпаргалка для нового чата

## 🚀 Быстрый старт

### 1. Прочитать контекст
```
read_file: C:\Users\VPN\Onlyvet-news3\CONTEXT_FOR_NEW_CHAT.md
```

### 2. Проверить MCP
```bash
curl http://localhost:3000/health && echo " - GitHub"
curl http://localhost:3006/health && echo " - Context7"
curl http://localhost:3011/health && echo " - Playwright"
```

### 3. Проверить Skills
```bash
dir C:\Users\VPN\.qwen\skills
```

---

## 📊 Что работает

| Категория | Количество | Статус |
|-----------|------------|--------|
| **MCP Серверов** | 19 | ✅ Все на портах 3000-3018 |
| **Skills** | 15 | ✅ Все в `.qwen/skills/` |
| **API Keys** | 1/7 | ⚠️ Только Context7 |
| **Сайт** | 85% | ✅ Работает на Vercel |

---

## 🔧 Основные команды

### Работа с кодом
```bash
cd C:\Users\VPN\Onlyvet-news3
npm run dev      # Запуск разработки
npm run build    # Сборка
npm run lint     # Линтинг
```

### Деплой
```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

### MCP запросы
```javascript
// GitHub
POST http://localhost:3000
{"action":"call","endpoint":"/repos/Stalser/Onlyvet-news3"}

// Context7
POST http://localhost:3006
{"action":"search","library":"nextjs","query":"middleware"}

// Security
POST http://localhost:3003
{"action":"scan","filePath":"src/"}
```

---

## 📁 Важные файлы

| Файл | Где | Зачем |
|------|-----|-------|
| `CONTEXT_FOR_NEW_CHAT.md` | Проект | Полный контекст |
| `WORK_HISTORY.md` | Проект | История работы |
| `mcp.json` | `.qwen/` | Конфигурация MCP |
| `MCP_COMPLETE_GUIDE_V3.md` | `.qwen/` | Полная документация |

---

## ⚠️ Что требует настройки

```env
# Файл: .qwen/mcp-servers/.env

TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
STRIPE_SECRET_KEY=xxx
PGPASSWORD=xxx
OPENAI_API_KEY=sk-xxx
FIGMA_TOKEN=xxx
N8N_API_KEY=xxx
```

---

## 🎯 Приоритеты

1. 🔴 Настроить PostgreSQL
2. 🔴 Настроить Telegram бота
3. 🔴 Создать админ-панель
4. 🟡 Настроить OpenAI
5. 🟡 Загрузить фото врачей

---

**Версия:** 4.0 Ultimate  
**Дата:** 10 марта 2026 г.  
**MCP:** 19 | **Skills:** 15
