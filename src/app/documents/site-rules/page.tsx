import Link from 'next/link';

export default function SiteRulesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Правила использования сайта
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Правила и рекомендации по работе с сайтом OnlyVet
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
                Пожалуйста, замените этот текст на актуальные правила из файла 
                «Правила_использования_сайита_OnlyVet.pages».
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Общие правила</h2>
            <p className="text-gray-700 mb-4">
              1.1. Сайт OnlyVet предназначен для получения информации о сервисе и 
              записи на ветеринарные консультации.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Используя сайт, вы соглашаетесь с настоящими Правилами.
            </p>
            <p className="text-gray-700 mb-4">
              1.3. Администрация сайта оставляет за собой право изменять Правила 
              без предварительного уведомления.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Регистрация и учётная запись</h2>
            <p className="text-gray-700 mb-4">
              2.1. Для записи на консультацию может потребоваться регистрация.
            </p>
            <p className="text-gray-700 mb-4">
              2.2. Вы обязуетесь предоставлять достоверную информацию при регистрации.
            </p>
            <p className="text-gray-700 mb-4">
              2.3. Вы несёте ответственность за сохранность данных вашей учётной записи.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Запрещённые действия</h2>
            <p className="text-gray-700 mb-4">
              3.1. При использовании сайта запрещается:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Предоставлять заведомо ложную информацию</li>
              <li>Использовать сайт в незаконных целях</li>
              <li>Пытаться получить несанкционированный доступ к сайту</li>
              <li>Вмешиваться в работу сайта (DDoS-атаки, спам и т.д.)</li>
              <li>Копировать и использовать контент сайта без разрешения</li>
              <li>Оскорблять сотрудников сервиса в любой форме</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Контент сайта</h2>
            <p className="text-gray-700 mb-4">
              4.1. Все материалы сайта (тексты, изображения, логотипы) являются 
              собственностью OnlyVet и защищены авторским правом.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Копирование материалов возможно только с письменного разрешения 
              администрации.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Конфиденциальность</h2>
            <p className="text-gray-700 mb-4">
              5.1. При использовании сайта мы собираем и обрабатываем персональные 
              данные в соответствии с Политикой конфиденциальности.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Вы обязуетесь не разглашать конфиденциальную информацию других 
              пользователей.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Технические вопросы</h2>
            <p className="text-gray-700 mb-4">
              6.1. Администрация не гарантирует бесперебойную работу сайта.
            </p>
            <p className="text-gray-700 mb-4">
              6.2. Технические работы могут проводиться без предварительного уведомления.
            </p>
            <p className="text-gray-700 mb-4">
              6.3. О возникших проблемах сообщайте на consult@onlyvet.ru.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Ответственность</h2>
            <p className="text-gray-700 mb-4">
              7.1. Администрация не несёт ответственности за убытки, возникшие в 
              результате использования сайта.
            </p>
            <p className="text-gray-700 mb-4">
              7.2. Администрация не несёт ответственности за содержание внешних 
              ресурсов, на которые есть ссылки на сайте.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Обратная связь</h2>
            <p className="text-gray-700 mb-4">
              8.1. По вопросам, связанным с использованием сайта, обращайтесь:
              <br />
              Email: <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline">consult@onlyvet.ru</a>
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
