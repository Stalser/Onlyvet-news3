'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';

const whatDoctorCan = [
  {
    icon: '✓',
    title: 'Оценить состояние по описанию',
    description: 'Врач анализирует симптомы, историю заболевания и поведение животного на основе вашего подробного описания.',
  },
  {
    icon: '✓',
    title: 'Интерпретировать анализы',
    description: 'Расшифровка результатов крови, мочи, биохимии с объяснением всех отклонений и их значения.',
  },
  {
    icon: '✓',
    title: 'Анализировать снимки',
    description: 'Оценка УЗИ, рентгена, КТ и МРТ по предоставленным изображениям и заключениям.',
  },
  {
    icon: '✓',
    title: 'Рекомендовать исследования',
    description: 'Список необходимых анализов и процедур для уточнения диагноза с приоритетами.',
  },
  {
    icon: '✓',
    title: 'Назначить лечение',
    description: 'Схема терапии с дозировками, кратностью и длительностью приёма препаратов.',
  },
  {
    icon: '✓',
    title: 'Скорректировать терапию',
    description: 'Изменение схемы лечения на основе динамики состояния и контрольных анализов.',
  },
];

const whatDoctorCannot = [
  {
    icon: '✕',
    title: 'Провести физический осмотр',
    description: 'Врач не может пропальпировать, прослушать лёгкие и сердце, оценить температуру.',
    recommendation: 'При необходимости очного осмотра врач порекомендует клинику.',
  },
  {
    icon: '✕',
    title: 'Оказать экстренную помощь',
    description: 'Травмы, отравления, кровотечения, судороги требуют немедленного очного вмешательства.',
    recommendation: 'В экстренных случаях сразу обращайтесь в ближайшую клинику.',
  },
  {
    icon: '✕',
    title: 'Выполнить процедуры',
    description: 'Постановка капельниц, уколов, обработка ран, хирургические манипуляции.',
    recommendation: 'Врач даст рекомендации, где можно выполнить назначения.',
  },
  {
    icon: '✕',
    title: 'Гарантировать диагноз без анализов',
    description: 'Некоторые заболевания требуют лабораторного подтверждения для точной диагностики.',
    recommendation: 'Врач объяснит, какие анализы необходимы.',
  },
];

const decisionMaking = [
  {
    step: '01',
    title: 'Сбор анамнеза',
    description: 'Врач получает подробную информацию о симптомах, истории заболевания, условиях содержания и питания.',
  },
  {
    step: '02',
    title: 'Анализ документов',
    description: 'Изучение результатов анализов, снимков, предыдущих назначений и их эффективности.',
  },
  {
    step: '03',
    title: 'Формулировка гипотез',
    description: 'На основе данных врач выдвигает несколько возможных диагнозов с оценкой вероятности.',
  },
  {
    step: '04',
    title: 'План действий',
    description: 'Рекомендации по дополнительным исследованиям или схеме лечения с контрольными точками.',
  },
  {
    step: '05',
    title: 'Наблюдение',
    description: 'Врач отслеживает динамику и при необходимости корректирует назначения.',
  },
];

const responsibility = [
  {
    title: 'Ответственность врача',
    items: [
      'Предоставление квалифицированной консультации на основе современных данных',
      'Обоснование рекомендаций с объяснением логики назначений',
      'Своевременное направление на очный приём при необходимости',
      'Конфиденциальность медицинской информации',
    ],
  },
  {
    title: 'Ответственность владельца',
    items: [
      'Предоставление полной и достоверной информации о животном',
      'Следование рекомендациям врача',
      'Своевременное сообщение об изменениях состояния',
      'Обращение за очной помощью при ухудшении',
    ],
  },
];

export default function SafetyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Безопасность
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Safety First</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Прозрачный подход к{' '}
                <span className="text-primary">онлайн-консультациям</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Понимание того, что можно и нельзя сделать дистанционно
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="mr-2">📝</span>
                  Записаться на консультацию
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">ℹ️</span>
                  Посмотреть услуги
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Что может врач */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Что ветеринарный врач может сделать онлайн
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatDoctorCan.map((item, index) => (
              <ScaleIn key={item.title} delay={index * 100}>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Что нельзя сделать онлайн */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Ограничения онлайн-формата
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatDoctorCannot.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-error/50 hover:bg-error/5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="bg-primary-light border-l-4 border-primary p-3 rounded-r">
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Рекомендация:</span> {item.recommendation}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Как принимаются клинические решения */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Как принимаются клинические решения
            </h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {decisionMaking.map((item, index) => (
                <FadeIn key={item.step} delay={index * 100}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ответственность */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Ответственность сторон
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {responsibility.map((section, index) => (
              <ScaleIn key={section.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary text-lg mt-0.5">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Остались вопросы?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы готовы ответить на любые вопросы о формате онлайн-консультаций
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Посмотреть FAQ
              </Link>
              <a
                href="mailto:consult@onlyvet.ru"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
              >
                Написать нам
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
