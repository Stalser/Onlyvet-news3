import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Дисклеймер
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Важная информация об ограничениях онлайн-формата
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
                Пожалуйста, замените этот текст на актуальный дисклеймер из файла 
                «Дисклеймер OnlyVet.pages».
              </p>
            </div>

            <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-semibold">
                ⚠️ Внимательно прочитайте этот дисклеймер перед использованием сервиса OnlyVet.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Общая информация</h2>
            <p className="text-gray-700 mb-4">
              1.1. Сервис OnlyVet предоставляет дистанционные ветеринарные консультации 
              и не является заменой очного приёма у ветеринарного врача.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Все рекомендации, полученные в результате онлайн-консультации, носят 
              информационный характер и не являются окончательным диагнозом.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Ограничения ответственности</h2>
            <p className="text-gray-700 mb-4">
              2.1. Сервис OnlyVet и его специалисты не несут ответственности за:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Неправильную интерпретацию рекомендаций пользователем</li>
              <li>Последствия, возникшие в результате предоставления неполной или 
                  недостоверной информации</li>
              <li>Ухудшение состояния животного из-за несвоевременного обращения 
                  за очной помощью</li>
              <li>Осложнения, возникшие в результате самолечения без соблюдения 
                  рекомендаций</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Экстренные случаи</h2>
            <div className="bg-error/10 border-l-4 border-error p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-semibold mb-4">
                🚨 ОНЛАЙН-КОНСУЛЬТАЦИЯ НЕ ПОДХОДИТ ДЛЯ ЭКСТРЕННЫХ СЛУЧАЕВ!
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Немедленно обратитесь в ближайшую ветеринарную клинику при:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Травмах любого характера</li>
                <li>Отравлениях и подозрении на отравление</li>
                <li>Кровотечениях</li>
                <li>Судорогах</li>
                <li>Затруднённом дыхании</li>
                <li>Потере сознания</li>
                <li>Острой боли</li>
                <li>Непроходимости кишечника</li>
                <li>Тяжёлых родах</li>
                <li>Тепловом ударе</li>
                <li>Любом состоянии, угрожающем жизни животного</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Диагностика и лечение</h2>
            <p className="text-gray-700 mb-4">
              4.1. Диагноз, поставленный дистанционно, является предварительным и может 
              требовать подтверждения при очном приёме.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Назначенное лечение может быть скорректировано после очного осмотра 
              и дополнительных исследований.
            </p>
            <p className="text-gray-700 mb-4">
              4.3. Эффективность лечения зависит от индивидуальных особенностей 
              животного и соблюдения рекомендаций.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Результаты анализов</h2>
            <p className="text-gray-700 mb-4">
              5.1. Интерпретация результатов анализов проводится на основании 
                  предоставленных данных.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Для точной диагностики могут потребоваться дополнительные исследования.
            </p>
            <p className="text-gray-700 mb-4">
              5.3. Референсные значения могут отличаться в разных лабораториях.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Назначения препаратов</h2>
            <p className="text-gray-700 mb-4">
              6.1. При назначении лекарственных препаратов врач указывает дозировку, 
                  кратность и длительность приёма.
            </p>
            <p className="text-gray-700 mb-4">
              6.2. Пользователь обязуется внимательно изучить инструкцию к препарату 
                  перед применением.
            </p>
            <p className="text-gray-700 mb-4">
              6.3. При возникновении побочных эффектов необходимо прекратить приём 
                  препарата и сообщить врачу.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Конфиденциальность</h2>
            <p className="text-gray-700 mb-4">
              7.1. Вся предоставленная информация сохраняется в тайне и не передаётся 
                  третьим лицам.
            </p>
            <p className="text-gray-700 mb-4">
              7.2. Исключение составляют случаи, предусмотренные законодательством 
                  Российской Федерации.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Принятие условий</h2>
            <p className="text-gray-700 mb-4">
              8.1. Используя сервис OnlyVet, вы подтверждаете, что:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Внимательно прочитали и поняли настоящий дисклеймер</li>
              <li>Осознаёте ограничения онлайн-формата</li>
              <li>Согласны с условиями предоставления услуг</li>
              <li>Готовы нести ответственность за соблюдение рекомендаций</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-8">
              <p className="text-gray-600 text-sm">
                <strong>Дата последнего обновления:</strong> 2026
                <br />
                <strong>Вопросы:</strong> consult@onlyvet.ru
              </p>
            </div>
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
