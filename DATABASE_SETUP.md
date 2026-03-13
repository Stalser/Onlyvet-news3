# 🗄️ DATABASE SETUP — Инструкция по подключению БД

**Дата:** 13 марта 2026  
**Статус:** 🔵 Готово к подключению

---

## 📋 ТЕКУЩЕЕ СОСТОЯНИЕ

### ✅ Что уже сделано:

1. **Созданы типы данных** — `src/data/types.ts`
   - `Doctor` — врачи
   - `Service` — услуги
   - `Review` — отзывы
   - `ApiResponse<T>` — интерфейс API

2. **Создан API слой** — `src/lib/api.ts`
   - `getDoctors()` — получить врачей
   - `getServices()` — получить услуги
   - `getReviews()` — получить отзывы
   - `getDoctorById(id)` — получить врача по ID
   - `getServiceById(id)` — получить услугу по ID
   - `getReviewsByDoctor(doctorId)` — отзывы по врачу
   - `createReview(review)` — создать отзыв

3. **Данные в файлах** — работают локально:
   - `src/data/doctors.ts` — 6 врачей
   - `src/data/services.ts` — 4 услуги
   - `src/data/reviews.ts` — 4 отзыва

---

## 🎯 ВАРИАНТЫ ПОДКЛЮЧЕНИЯ БД

### Вариант 1: PocketBase (рекомендуется)

**Почему PocketBase:**
- ✅ SQLite внутри (простота)
- ✅ Готовый REST API
- ✅ Real-time подписки
- ✅ Авторизация из коробки
- ✅ Работает на Vercel (Serverless)
- ✅ Админка в комплекте (можно скрыть)

**Шаги подключения:**

1. **Установить PocketBase:**
   ```bash
   # Скачать с https://pocketbase.io
   # Распаковать в /pocketbase
   ```

2. **Создать коллекции:**
   - `doctors` (поля: id, name, role, specialization, etc.)
   - `services` (поля: id, name, price, description, etc.)
   - `reviews` (поля: id, clientName, text, rating, etc.)

3. **Настроить переменные окружения:**
   ```env
   NEXT_PUBLIC_POCKETBASE_URL=https://your-pocketbase.pocketbasehost.com
   ```

4. **Включить API в `src/lib/api.ts`:**
   ```typescript
   const USE_API = true; // было false
   ```

---

### Вариант 2: PostgreSQL (Neon/Supabase)

**Почему PostgreSQL:**
- ✅ Полноценная SQL БД
- ✅ Масштабируемость
- ✅ Vercel интеграция
- ✅ Vercel Postgres / Neon / Supabase

**Шаги подключения:**

1. **Создать БД на Vercel/Neon:**
   ```bash
   vercel postgres create
   ```

2. **Создать таблицы:**
   ```sql
   CREATE TABLE doctors (
     id TEXT PRIMARY KEY,
     name TEXT NOT NULL,
     role TEXT,
     specialization TEXT,
     services_short TEXT,
     tags JSONB,
     experience_label TEXT,
     image_url TEXT,
     patients_count TEXT,
     reviews_count TEXT,
     is_active BOOLEAN DEFAULT true,
     sort_order INTEGER DEFAULT 0
   );

   CREATE TABLE services (
     id TEXT PRIMARY KEY,
     name TEXT NOT NULL,
     short_description TEXT,
     full_description JSONB,
     category TEXT,
     price_label TEXT,
     price_from INTEGER,
     tags JSONB,
     is_active BOOLEAN DEFAULT true,
     sort_order INTEGER DEFAULT 0
   );

   CREATE TABLE reviews (
     id TEXT PRIMARY KEY,
     client_name TEXT NOT NULL,
     pet_name TEXT,
     rating INTEGER DEFAULT 5,
     text TEXT,
     date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     doctor_id TEXT REFERENCES doctors(id),
     service_id TEXT REFERENCES services(id),
     source TEXT,
     is_active BOOLEAN DEFAULT true
   );
   ```

3. **Настроить переменные окружения:**
   ```env
   POSTGRES_URL=postgres://...
   ```

4. **Создать API routes:**
   - `app/api/doctors/route.ts`
   - `app/api/services/route.ts`
   - `app/api/reviews/route.ts`

---

### Вариант 3: SQLite + Backend (локально)

**Почему SQLite:**
- ✅ Простота
- ✅ Не нужен отдельный сервер
- ✅ Работает локально

**Минусы:**
- ❌ Не работает на Vercel (read-only FS)
- ❌ Нужен отдельный backend для production

**Шаги подключения:**

1. **Запустить backend:**
   ```bash
   cd backend
   node server.js
   ```

2. **Настроить переменные окружения:**
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:4001
   ```

3. **Включить API в `src/lib/api.ts`:**
   ```typescript
   const USE_API = true;
   ```

---

## 📁 СТРУКТУРА ФАЙЛОВ

```
src/
├── data/
│   ├── types.ts          # ✅ Типы данных
│   ├── doctors.ts        # 📄 Данные врачей (локально)
│   ├── services.ts       # 📄 Данные услуг (локально)
│   └── reviews.ts        # 📄 Данные отзывов (локально)
│
├── lib/
│   ├── api.ts            # ✅ API утилиты
│   └── pocketbase.ts     # 🔵 Будущий PocketBase клиент
│
└── app/
    └── api/              # 🔵 Будущие API routes
        ├── doctors/
        ├── services/
        └── reviews/
```

---

## 🔄 КАК ПЕРЕКЛЮЧИТЬСЯ НА БД

### 1. Подготовить БД
Создать таблицы/коллекции по схеме из `src/data/types.ts`

### 2. Настроить переменные окружения
Создать `.env.local`:
```env
NEXT_PUBLIC_POCKETBASE_URL=https://...
# или
POSTGRES_URL=postgres://...
# или
NEXT_PUBLIC_BACKEND_URL=http://localhost:4001
```

### 3. Включить API режим
В `src/lib/api.ts` изменить:
```typescript
const USE_API = true; // было false
```

### 4. Обновить данные в БД
Загрузить текущие данные из файлов в БД

### 5. Протестировать
Запустить проект и проверить что данные загружаются

---

## 🎯 РЕКОМЕНДАЦИИ

### Для начала (MVP):
**PocketBase** — быстро, просто, работает на Vercel

### Для роста:
**PostgreSQL (Neon)** — полноценная БД, масштабируемость

### Для локальной разработки:
**SQLite + Backend** — быстро, не нужен интернет

---

## 📞 КОНТАКТЫ

**Документация:**
- PocketBase: https://pocketbase.io/docs
- Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres
- Neon: https://neon.tech/docs

**Готов к подключению!** 🚀
