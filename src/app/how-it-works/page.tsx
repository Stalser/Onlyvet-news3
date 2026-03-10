'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const steps = [
  {
    number: '01',
    title: 'Оставьте заявку на сайте',
    description: 'Заполните форму записи — укажите имя, контакт и краткое описание проблемы. Это займёт 2-3 минуты.',
    icon: '📝',
    tips: [
      'Укажите удобное время для связи',
      'Кратко опишите симптомы животного',
      'Проверьте правильность контактных данных',
    ],
  },
  {
    number: '02',
    title: 'Оплатите консультацию',
    description: 'После подтверждения заявки вы получите ссылку на оплату. Принимаем карты РФ и СБП.',
    icon: '💳',
    tips: [
      'Оплата безопасна через платёжный шлюз',
      'Чек придёт на email',
      'Возврат при отмене за 24 часа',
    ],
  },
  {
    number: '03',
    title: 'Свяжитесь с регистратором',
    description: 'Наш регистратор свяжется с вами в течение 30 минут для уточнения деталей и подбора врача.',
    icon: '📞',
    tips: [
      'Будьте на связи по телефону или в мессенджере',
      'Подготовьте вопросы для врача',
      'Уточните удобное время консультации',
    ],
  },
  {
    number: '04',
    title: 'Подготовьтесь к консультации',
    description: 'Соберите информацию о животном: возраст, породу, симптомы, фото/видео, результаты анализов (если есть).',
    icon: '📋',
    tips: [
      'Сфотографируйте животное (общее состояние)',
      'Снимите видео поведения (если есть особенности)',
      'Подготовьте результаты анализов и выписки',
      'Запишите все вопросы врачу',
    ],
  },
  {
    number: '05',
    title: 'Получите ссылку на видеосвязь',
    description: 'За 15 минут до консультации вы получите ссылку на Яндекс.Телемост или звонок в Яндекс.Мессенджере.',
    icon: '🔗',
    tips: [
      'Проверьте стабильность интернета',
      'Убедитесь, что камера и микрофон работают',
      'Найдите тихое место с хорошим освещением',
    ],
  },
  {
    number: '06',
    title: 'Проведите консультацию с врачом',
    description: 'Врач проведёт осмотр через видео, задаст вопросы, изучит материалы и даст рекомендации.',
    icon: '👨‍⚕️',
    tips: [
      'Покажите животное камере',
      'Задайте все подготовленные вопросы',
      'Записывайте рекомендации врача',
      'Уточните, когда нужна повторная консультация',
    ],
  },
  {
    number: '07',
    title: 'Получите письменное заключение',
    description: 'После консультации вы получите подробное резюме с рекомендациями, назначениями и планом лечения.',
    icon: '📄',
    tips: [
      'Заключение придёт на email в течение 2 часов',
      'Сохраните документ для истории',
      'При необходимости покажите очному ветеринару',
    ],
  },
];

const platforms = [
  {
    name: 'Яндекс.Телемост',
    description: 'Видеосвязь высокого качества. Не требует установки — работает прямо в браузере.',
    icon: '📹',
    features: ['HD качество видео', 'Работает в браузере', 'Безопасно и конфиденциально', 'Запись консультации'],
    link: 'https://telemost.yandex.ru/',
    linkText: 'Открыть Телемост',
  },
  {
    name: 'Яндекс.Мессенджер',
    description: 'Для быстрой связи и отправки фото/видео материалов до и после консультации.',
    icon: '💬',
    features: ['Быстрые сообщения', 'Отправка фото и видео', 'Голосовые сообщения', 'История переписки'],
    link: 'https://messenger.yandex.ru/',
    linkText: 'Открыть Мессенджер',
  },
];

const prepareList = [
  {
    category: 'Основная информация',
    items: [
      'Возраст и пол животного',
      'Порода (если известна)',
      'Вес (примерно или точно)',
      'Как давно появились симптомы',
    ],
  },
  {
    category: 'Симптомы',
    items: [
      'Изменения в поведении',
      'Изменения аппетита',
      'Проблемы со стулом/мочеиспусканием',
      'Рвота, кашель, выделения',
      'Температура (если измеряли)',
    ],
  },
  {
    category: 'Материалы',
    items: [
      'Фото животного (общее состояние)',
      'Видео поведения (если есть особенности)',
      'Результаты анализов (фото или PDF)',
      'Выписки из клиник',
      'Фото назначенных препаратов',
    ],
  },
  {
    category: 'Вопросы врачу',
    items: [
      'Что с моим животным?',
      'Какие анализы нужны?',
      'Какое лечение назначаете?',
      'Когда нужна повторная консультация?',
      'На что обратить внимание?',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Как это работает</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Онлайн-консультация ветеринара — это просто, удобно и эффективно. 
                Мы продумали каждый шаг, чтобы вы получили максимальную пользу.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Пошаговая инструкция */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              7 простых шагов к здоровью вашего питомца
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 100}>
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Номер и иконка */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-primary-light opacity-50">{step.number}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* Советы */}
                    <div className="bg-primary-light/30 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">💡 Советы:</h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-primary mt-1">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Платформы для связи */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Через что проходит консультация
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Мы используем надёжные и удобные платформы от Яндекса
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <FadeIn key={platform.name} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl">{platform.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
                    style={{ color: '#FFFFFF' }}
                  >
                    {platform.linkText}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Важно */}
          <FadeIn delay={400}>
            <div className="mt-12 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
              <h4 className="font-semibold text-amber-900 mb-2">⚠️ Важно:</h4>
              <p className="text-amber-800">
                Ссылка на видеосвязь придёт за 15 минут до консультации. 
                Рекомендуем установить приложения заранее, чтобы избежать технических задержек.
              </p>
              <div className="mt-4">
                <Link
                  href="/setup"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                >
                  📥 Подробная инструкция по установке →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Как подготовиться */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Как подготовиться к консультации
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Чем больше информации вы подготовите, тем точнее будет диагноз
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prepareList.map((section, index) => (
              <FadeIn key={section.category} delay={index * 100}>
                <div className="bg-gradient-to-br from-primary-light/30 to-white rounded-2xl p-6 border border-primary-light">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы записаться?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку сейчас — мы свяжемся с вами в течение 30 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Оставить заявку
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
