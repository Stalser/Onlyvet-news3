# 🛠️ MCP Setup Guide для OnlyVet

## 📋 Что такое MCP?

**MCP (Model Context Protocol)** — протокол для подключения ИИ к внешним сервисам.

---

## ✅ **Настроено автоматически!**

Конфигурация создана в: `~/.qwen/mcp-config.json`

### **Доступные серверы:**

| Сервер | Статус | Токен |
|--------|--------|-------|
| **Context7** | ✅ Настроен | ctx7sk-729b...08615 |
| GitHub | ✅ Настроен | ghp_kqc...066u |
| Vercel | ✅ Настроен | vcp_7Dj...Xgf6 |

---

## 🚀 **Следующие шаги:**

### **1. Перезапустите Qwen Code**

Закройте и откройте приложение заново.

### **2. Проверьте работу**

Напишите мне:
- "Покажи документацию Next.js по middleware"
- "Покажи мои репозитории на GitHub"
- "Какой статус деплоя на Vercel?"

---

## 🔧 **Ручная установка (опционально)**

Если MCP не работает, установите серверы:

```bash
# GitHub MCP
npm install -g @modelcontextprotocol/server-github

# Vercel MCP (если доступен)
npm install -g @modelcontextprotocol/server-vercel
```

---

## 📊 **Что я могу делать с MCP:**

### **GitHub:**
- ✅ Просмотр репозиториев
- ✅ Создание Issues
- ✅ Управление Pull Requests
- ✅ Проверка CI/CD статуса

### **Vercel:**
- ✅ Просмотр деплоев
- ✅ Логи сборки
- ✅ Управление доменами

---

## 🔒 **Безопасность:**

⚠️ **Файл с токенами:** `~/.qwen/mcp-config.json`

- ✅ Не коммитьте в Git
- ✅ Ограничьте права токенов
- ✅ Регулярно обновляйте

---

## 📞 **Проблемы?**

1. **Проверьте конфиг:**
   ```bash
   cat ~/.qwen/mcp-config.json
   ```

2. **Проверьте токены:**
   - GitHub: https://github.com/settings/tokens
   - Vercel: https://vercel.com/account/settings

3. **Перезапустите Qwen Code**

---

**Готово!** 🎉
