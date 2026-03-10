import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Политика использования cookies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Информация об использовании файлов cookie на сайте OnlyVet
          </p>
        </div>
      </section>

      {/* Содержимое */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-secondary-light border-l-4 border-secondary p-6 rounded-r-lg mb-8">
              <p className="text-gray-700">
                <span className="font-semibold">Примечание:</span> Это шаблон документа. 
                Пожалуйста, замените этот текст на актуальную политику из файла 
                «Политика Cookies OnlyVet.pages».
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Что такое cookies</h2>
            <p className="text-gray-700 mb-4">
              1.1. Cookies (куки) — это небольшие текстовые файлы, которые сохраняются 
              на вашем устройстве при посещении сайта.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Cookies позволяют сайту запоминать ваши действия и предпочтения 
              (например, вход в систему, язык и другие параметры).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Какие cookies мы используем</h2>
            <p className="text-gray-700 mb-4">
              2.1. <strong>Необходимые cookies</strong> — необходимы для работы сайта 
              и предоставления основных функций (авторизация, безопасность).
            </p>
            <p className="text-gray-700 mb-4">
              2.2. <strong>Аналитические cookies</strong> — помогают нам понять, как 
              пользователи взаимодействуют с сайтом (Google Analytics, Яндекс.Метрика).
            </p>
            <p className="text-gray-700 mb-4">
              2.3. <strong>Функциональные cookies</strong> — запоминают ваши предпочтения 
              (язык, регион, настройки отображения).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Как управлять cookies</h2>
            <p className="text-gray-700 mb-4">
              3.1. Вы можете управлять cookies через настройки вашего браузера.
            </p>
            <p className="text-gray-700 mb-4">
              3.2. Большинство браузеров позволяют:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Просматривать установленные cookies</li>
              <li>Удалять все или отдельные cookies</li>
              <li>Блокировать cookies от определённых сайтов</li>
              <li>Блокировать все cookies</li>
            </ul>
            <p className="text-gray-700 mb-4">
              3.3. Обратите внимание, что отключение cookies может повлиять на 
              функциональность сайта.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Сторонние cookies</h2>
            <p className="text-gray-700 mb-4">
              4.1. Некоторые cookies устанавливаются третьими сторонами (например, 
              Google, Яндекс, социальные сети).
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Мы не контролируем настройки этих cookies. Рекомендуем ознакомиться 
              с политиками соответствующих сервисов.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Обновление политики</h2>
            <p className="text-gray-700 mb-4">
              5.1. Мы можем обновлять данную политику время от времени.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Актуальная версия всегда доступна на этой странице.
            </p>
          </div>
        </div>
      </section>

      {/* Навигация */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/documents"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            ← Вернуться к списку документов
          </Link>
        </div>
      </section>
    </div>
  );
}
