import Link from 'next/link';

export default function ConsentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Согласие на дистанционную ветеринарную консультацию
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Информированное согласие на получение ветеринарных услуг онлайн
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
                Пожалуйста, замените этот текст на актуальное согласие из файла 
                «Согласие_на_дистанционную_ветеринарную_консультацию_.pages».
              </p>
            </div>

            <div className="bg-primary-light border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-semibold">
                Я, нижеподписавшийся(аясь), настоящим даю своё добровольное информированное 
                согласие на получение дистанционной ветеринарной консультации в сервисе OnlyVet.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Характер услуги</h2>
            <p className="text-gray-700 mb-4">
              1.1. Я понимаю, что дистанционная (онлайн) консультация ветеринарного врача 
              имеет ограничения по сравнению с очным приёмом.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Врач не может провести физический осмотр, пальпацию, аускультацию и 
              другие манипуляции, требующие непосредственного присутствия животного.
            </p>
            <p className="text-gray-700 mb-4">
              1.3. Диагностика и рекомендации основываются на предоставленной мной 
              информации, описании симптомов и результатах анализов (если имеются).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Ограничения онлайн-формата</h2>
            <p className="text-gray-700 mb-4">
              2.1. Я понимаю и принимаю, что онлайн-консультация <strong>не подходит</strong> для:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Экстренных случаев (травмы, отравления, кровотечения)</li>
              <li>Состояний, требующих немедленного вмешательства</li>
              <li>Процедурных манипуляций (уколы, капельницы, обработка ран)</li>
              <li>Случаев, когда необходим физический осмотр</li>
            </ul>

            <p className="text-gray-700 mb-4">
              2.2. В случае, если врач определит необходимость очного приёма, он 
              порекомендует обратиться в ближайшую ветеринарную клинику.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Мои обязательства</h2>
            <p className="text-gray-700 mb-4">
              3.1. Я обязуюсь предоставлять достоверную и полную информацию о:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Состоянии и поведении животного</li>
              <li>Истории заболевания</li>
              <li>Предыдущих диагнозах и лечении</li>
              <li>Результатах анализов и исследований</li>
              <li>Аллергических реакциях и непереносимостях</li>
            </ul>

            <p className="text-gray-700 mb-4">
              3.2. Я обязуюсь следовать рекомендациям врача и своевременно сообщать 
              об изменениях состояния животного.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Риски</h2>
            <p className="text-gray-700 mb-4">
              4.1. Я понимаю, что диагноз, поставленный дистанционно, может быть 
              предварительным и требовать подтверждения при очном приёме.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. Я понимаю, что эффективность лечения зависит от множества факторов, 
              включая соблюдение рекомендаций и индивидуальные особенности животного.
            </p>
            <p className="text-gray-700 mb-4">
              4.3. Я принимаю на себя ответственность за последствия, возникшие в 
              результате предоставления недостоверной или неполной информации.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Конфиденциальность</h2>
            <p className="text-gray-700 mb-4">
              5.1. Я даю согласие на обработку моих персональных данных в целях 
              оказания ветеринарных услуг.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Я понимаю, что вся медицинская информация будет сохраняться в 
              тайне и не передаваться третьим лицам без моего согласия.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Подтверждение</h2>
            <p className="text-gray-700 mb-4">
              6.1. Начиная использование сервиса OnlyVet, я подтверждаю, что:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Внимательно прочитал(а) и понял(а) настоящее Согласие</li>
              <li>Осознаю ограничения онлайн-формата</li>
              <li>Согласен(на) получать ветеринарные услуги дистанционно</li>
              <li>Готов(а) предоставить полную и достоверную информацию</li>
            </ul>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mt-8">
              <p className="text-gray-600 text-sm">
                <strong>Дата вступления в силу:</strong> с момента начала использования сервиса
                <br />
                <strong>Контакты:</strong> consult@onlyvet.ru
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
