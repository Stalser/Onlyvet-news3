'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';

const steps = [
  {
    number: '01',
    icon: '📝',
    title: 'Заявка и описание ситуации',
    description: 'Вы оставляете заявку и подробно описываете проблему. Расскажите о симптомах, длительности заболевания, особенностях поведения животного.',
    details: [
      'Заполните форму на сайте или напишите на почту',
      'Опишите симптомы и историю заболевания',
      'Укажите возраст, породу и пол животного',
      'Приложите имеющиеся документы: анализы, снимки, назначения',
    ],
    tip: 'Чем подробнее вы опишете ситуацию, тем точнее будет предварительная оценка врача.',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'Изучение информации врачом',
    description: 'Врач внимательно изучает все предоставленные данные, анализирует документы и формулирует уточняющие вопросы.',
    details: [
      'Врач получает вашу заявку',
      'Изучает приложенные документы и анализы',
      'Формулирует предварительные гипотезы',
      'Подготавливает вопросы для уточнения деталей',
    ],
    tip: 'Обычно на этом этапе врач связывается в течение 24 часов для уточнения деталей.',
  },
  {
    number: '03',
    icon: '💬',
    title: 'Онлайн-консультация',
    description: 'Проводится видеозвонок или консультация в чате. Врач задаёт вопросы, уточняет детали и обсуждает с вами ситуацию.',
    details: [
      'Видеозвонок через удобную платформу (Zoom, Telegram, WhatsApp)',
      'Или текстовая консультация в чате',
      'Длительность: 30–60 минут',
      'Возможность задать все вопросы в реальном времени',
    ],
    tip: 'Подготовьтесь к звонку: обеспечьте хорошее освещение и будьте рядом с животным.',
  },
  {
    number: '04',
    icon: '📋',
    title: 'Письменное заключение и рекомендации',
    description: 'После консультации вы получаете подробное письменное заключение с рекомендациями и планом действий.',
    details: [
      'Письменное резюме консультации',
      'Рекомендации по дополнительным исследованиям',
      'Схема лечения (если требуется)',
      'План наблюдения и контрольные точки',
    ],
    tip: 'Заключение сохраняется у вас — вы можете вернуться к нему в любой момент.',
  },
];

const formats = [
  {
    icon: '📹',
    name: 'Видеоконсультация',
    duration: '30–60 минут',
    platforms: ['Zoom', 'Telegram', 'WhatsApp'],
    best: 'Для первичных консультаций и сложных случаев',
  },
  {
    icon: '💭',
    name: 'Текстовая консультация',
    duration: 'В течение 24 часов',
    platforms: ['Email', 'Мессенджеры'],
    best: 'Для разбора анализов и вторых мнений',
  },
];

const preparationTips = [
  {
    icon: '📝',
    title: 'Подготовьте историю',
    text: 'Запишите ключевые даты: когда появились симптомы, что менялось в состоянии',
  },
  {
    icon: '📸',
    title: 'Соберите документы',
    text: 'Все анализы, снимки, назначения — чем больше информации, тем лучше',
  },
  {
    icon: '🎥',
    title: 'Снимите видео',
    text: 'Если есть необычное поведение или симптомы — короткое видео поможет врачу',
  },
  {
    icon: '❓',
    title: 'Список вопросов',
    text: 'Запишите вопросы заранее, чтобы ничего не забыть во время консультации',
  },
];

export default function HowItWorksPage() {
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
                    Как это работает
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">How It Works</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Простой процесс из{' '}
                <span className="text-primary">четырёх шагов</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Начните с заявки — получите экспертную помощь для вашего питомца
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

      {/* Шаги консультации */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 100}>
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Иконка и заголовок */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center mb-6 mx-auto lg:mx-0">
                        <span className="text-6xl">{step.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center lg:text-left">{step.title}</h3>
                    </div>
                  </div>

                  {/* Описание и детали */}
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    <ul className="space-y-3 mb-6">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary text-lg mt-0.5">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-primary-light border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        <span className="font-semibold">💡 Совет:</span> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Форматы консультаций */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Форматы консультаций
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formats.map((format, index) => (
              <ScaleIn key={format.name} delay={index * 100}>
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-4">{format.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{format.name}</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <span className="font-semibold">Длительность:</span> {format.duration}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Платформы:</span> {format.platforms.join(', ')}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Подходит:</span> {format.best}
                    </p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Как подготовиться */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Как подготовиться к консультации
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationTips.map((tip, index) => (
              <ScaleIn key={tip.title} delay={index * 100}>
                <div className="p-6 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.text}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы начать?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку на консультацию — мы свяжемся с вами в ближайшее время
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Записаться на консультацию
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
              >
                Посмотреть услуги
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
