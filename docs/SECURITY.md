# 🔒 Безопасность OnlyVet

## ✅ Что уже настроено

### 1. **Middleware защиты** (`src/middleware.ts`)

- ✅ **Rate Limiting** — 30 запросов в минуту с одного IP
- ✅ **Security Headers**:
  - `Strict-Transport-Security` — HTTPS принудительно
  - `X-XSS-Protection` — защита от XSS атак
  - `X-Frame-Options` — защита от clickjacking
  - `X-Content-Type-Options` — защита от MIME sniffing
  - `Referrer-Policy` — контроль referrer
  - `Permissions-Policy` — отключение камеры, микрофона, геолокации

### 2. **API защита** (`src/app/api/booking/route.ts`)

- ✅ Rate limiting для форм (5 заявок в час)
- ✅ Валидация email
- ✅ Санитизация HTML (защита от XSS)
- ✅ Маскировка персональных данных

### 3. **Утилиты безопасности** (`src/lib/security.ts`)

- ✅ Санитизация HTML
- ✅ Валидация email и телефона
- ✅ Генерация CSRF токенов
- ✅ Rate limiting helper
- ✅ Маскировка персональных данных
- ✅ Безопасное логирование

### 4. **.env защита**

- ✅ `.env` добавлен в `.gitignore`
- ✅ `.env.example` с шаблоном для копирования

---

## 🚀 Что сделать при деплое на хостинг

### **1. Environment Variables**

Скопируйте `.env.example` в `.env.local` и заполните:

```bash
cp .env.example .env.local
```

**Обязательные поля:**
```env
# Для форм
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Для аналитики (опционально)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### **2. Vercel (рекомендуемый хостинг)**

Vercel автоматически предоставляет:

- ✅ **HTTPS** (SSL сертификат)
- ✅ **DDoS защита**
- ✅ **Security headers**
- ✅ **Automatic security updates**

**Настройки в Vercel Dashboard:**

1. Зайдите в Settings → Security
2. Включите:
   - ✅ Automatic HTTPS
   - ✅ Security Headers
   - ✅ DDoS Protection

### **3. Дополнительная защита (по желанию)**

#### **A. Google reCAPTCHA для форм**

Установите:
```bash
npm install react-google-recaptcha
```

Добавьте в `.env`:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

#### **B. Email уведомления**

Для отправки писем используйте **Resend** или **SendGrid**:

```bash
npm install resend
```

Добавьте в `.env`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

#### **C. Telegram уведомления**

1. Создайте бота в @BotFather
2. Узнайте chat_id в @userinfobot
3. Добавьте в `.env`:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=-1001234567890
```

---

## 📋 Чек-лист безопасности перед запуском

- [ ] Скопировать `.env.example` в `.env.local`
- [ ] Заполнить все API ключи
- [ ] Проверить, что `.env` не попал в git
- [ ] Включить HTTPS на хостинге
- [ ] Настроить CORS для API
- [ ] Протестировать rate limiting
- [ ] Проверить security headers (https://securityheaders.com)
- [ ] Настроить резервное копирование данных
- [ ] Добавить мониторинг ошибок (Sentry)

---

## 🛡️ Рекомендации для продакшена

### **1. Мониторинг**

Установите **Sentry** для отслеживания ошибок:

```bash
npm install @sentry/nextjs
```

### **2. Аналитика**

Добавьте **Google Analytics** или **Yandex.Metrika**:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXXXX
```

### **3. Резервное копирование**

Настройте автоматический backup базы данных (если будет).

### **4. Логирование**

В production используйте **Vercel Analytics** или **LogRocket**.

---

## 📞 Экстренная помощь

Если обнаружили уязвимость:

1. Немедленно закройте доступ к сайту (через Vercel Dashboard)
2. Исправьте уязвимость
3. Протестируйте
4. Откройте доступ

---

**Последнее обновление:** 7 марта 2026 г.
