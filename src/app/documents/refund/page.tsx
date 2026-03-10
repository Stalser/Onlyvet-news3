import Link from 'next/link';

export default function RefundPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Правила оплаты и возврата
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Условия оплаты услуг и порядок возврата средств
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
                «ПРАВИЛА ОПЛАТЫ И ВОЗВРАТА OnlyVet.pages».
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Способы оплаты</h2>
            <p className="text-gray-700 mb-4">
              1.1. Оплата услуг сервиса OnlyVet производится следующими способами:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Банковской картой через платёжный шлюз</li>
              <li>Банковским переводом по реквизитам</li>
              <li>Через платёжные системы (по договорённости)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              1.2. Оплата производится в рублях Российской Федерации.
            </p>
            <p className="text-gray-700 mb-4">
              1.3. Услуга считается оплаченной с момента поступления денежных средств 
              на счёт Исполнителя.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Порядок оплаты</h2>
            <p className="text-gray-700 mb-4">
              2.1. Оплата производится после согласования времени консультации и перед 
              началом оказания услуги.
            </p>
            <p className="text-gray-700 mb-4">
              2.2. После оплаты Пользователь получает подтверждение записи на консультацию.
            </p>
            <p className="text-gray-700 mb-4">
              2.3. Чек об оплате направляется на электронную почту Пользователя.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Возврат средств</h2>
            <p className="text-gray-700 mb-4">
              3.1. <strong>Полный возврат:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>При отмене консультации Исполнителем</li>
              <li>При отмене Пользователем более чем за 24 часа до консультации</li>
              <li>При технической невозможности проведения консультации</li>
            </ul>

            <p className="text-gray-700 mb-4">
              3.2. <strong>Частичный возврат (50%):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>При отмене Пользователем менее чем за 24 часа до консультации</li>
              <li>При переносе консультации менее чем за 24 часа</li>
            </ul>

            <p className="text-gray-700 mb-4">
              3.3. <strong>Возврат не производится:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>После начала оказания услуги</li>
              <li>При неявке Пользователя на консультацию без предварительной отмены</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Срок возврата</h2>
            <p className="text-gray-700 mb-4">
              4.1. Возврат денежных средств производится в течение 10 рабочих дней с 
              момента получения заявления на возврат.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Денежные средства возвращаются тем же способом, которым была 
              произведена оплата.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Порядок оформления возврата</h2>
            <p className="text-gray-700 mb-4">
              5.1. Для оформления возврата необходимо направить заявление на 
              электронную почту consult@onlyvet.ru.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. В заявлении указываются:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>ФИО Пользователя</li>
              <li>Номер заказа/консультации</li>
              <li>Причина возврата</li>
              <li>Реквизиты для возврата</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Контакты</h2>
            <p className="text-gray-700 mb-4">
              По вопросам оплаты и возврата обращайтесь:
              <br />
              Email: <a href="mailto:billing@onlyvet.ru" className="text-primary hover:underline">billing@onlyvet.ru</a>
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
