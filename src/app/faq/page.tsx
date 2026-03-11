'use client';

import { useState } from 'react';
import FadeIn from '@/components/FadeIn';

const faqCategories = [
  {
    name: 'Общие вопросы',
    icon: '❓',
    questions: [
      {
        q: 'Что такое онлайн-консультация ветеринара?',
        a: 'Это дистанционная консультация с ветеринарным врачом через видеосвязь. Врач оценит состояние животного, соберёт анамнез, даст рекомендации по лечению или обследованию. Онлайн-консультация не заменяет очный приём в экстренных случаях, но эффективна для большинства неэкстренных ситуаций.',
      },
      {
        q: 'В каких случаях подходит онлайн-консультация?',
        a: 'Онлайн-консультация подходит для: первичной оценки состояния, второго мнения, расшифровки анализов, коррекции лечения, вопросов по питанию и содержанию, поведенческих проблем, хронических заболеваний (мониторинг).',
      },
      {
        q: 'Когда нужен очный приём?',
        a: 'Очный приём необходим при: травмах, кровотечениях, затруднённом дыхании, судорогах, потере сознания, признаках отравления, родах. В экстренных случаях немедленно обратитесь в ближайшую клинику!',
      },
      {
        q: 'Какие у вас цены?',
        a: 'Первичная консультация терапевта — 1 900 ₽, расширенная — 2 500 ₽, узкого специалиста — 2 800 ₽. Полный прайс смотрите в разделе «Услуги и цены».',
      },
    ],
  },
  {
    name: 'Запись и оплата',
    icon: '📝',
    questions: [
      {
        q: 'Как записаться на консультацию?',
        a: 'Заполните форму на сайте в разделе «Записаться». Укажите имя, контактные данные и краткое описание проблемы. Наш регистратор свяжется с вами в течение 30 минут для подтверждения.',
      },
      {
        q: 'Как происходит оплата?',
        a: 'После подтверждения заявки вы получите ссылку на безопасную оплату. Принимаем банковские карты РФ и СБП. Чек придёт на ваш email.',
      },
      {
        q: 'Можно ли вернуть деньги?',
        a: 'Да, полный возврат возможен при отмене более чем за 24 часа до консультации. При отмене менее чем за 24 часа — 50% возврат. После начала консультации возврат не производится.',
      },
      {
        q: 'Можно ли перенести консультацию?',
        a: 'Да, перенос возможен не позднее чем за 24 часа до назначенного времени. Свяжитесь с нами по телефону или в мессенджере.',
      },
    ],
  },
  {
    name: 'Технические вопросы',
    icon: '💻',
    questions: [
      {
        q: 'Через что проходит консультация?',
        a: 'Мы используем Яндекс.Телемост для видеосвязи и Яндекс.Мессенджер для быстрой связи и отправки материалов. Ссылка придёт за 15 минут до консультации.',
      },
      {
        q: 'Нужно ли устанавливать приложения?',
        a: 'Яндекс.Телемост работает прямо в браузере — установка не требуется. Но для удобства рекомендуем установить приложения заранее. У нас есть подробная инструкция по установке для всех устройств.',
      },
      {
        q: 'Где найти инструкцию по установке?',
        a: 'Откройте страницу «Настройка приложений» — там пошаговые инструкции для Android, iPhone, Windows и macOS с прямыми ссылками на скачивание.',
      },
      {
        q: 'Что делать, если связь прервалась?',
        a: 'Не волнуйтесь! Врач перезвонит вам через альтернативный канал связи (телефон или мессенджер). Консультация будет продолжена.',
      },
      {
        q: 'Можно ли записать консультацию?',
        a: 'Да, вы можете записать видеозвонок для личного использования. Предупредите врача о записи в начале консультации.',
      },
      {
        q: 'Какие требования к устройству?',
        a: 'Подойдёт любое устройство с камерой и микрофоном: смартфон, планшет, ноутбук, компьютер. Нужен стабильный интернет (от 2 Мбит/с).',
      },
    ],
  },
  {
    name: 'Подготовка',
    icon: '📋',
    questions: [
      {
        q: 'Что нужно подготовить перед консультацией?',
        a: 'Подготовьте: информацию о животном (возраст, пол, порода), описание симптомов, фото/видео животного, результаты анализов (если есть), список вопросов врачу.',
      },
      {
        q: 'Как передать врачу анализы?',
        a: 'Отправьте фото или PDF-файлы результатов анализов в Яндекс.Мессенджер за 15-30 минут до консультации. Врач изучит их заранее.',
      },
      {
        q: 'Нужно ли быть рядом с животным?',
        a: 'Да, обязательно! Врач может попросить показать животное, его активность, состояние шерсти, глаз, ушей и т.д.',
      },
      {
        q: 'Можно ли проконсультироваться без животного?',
        a: 'Можно для вопросов по питанию, содержанию, расшифровке анализов. Для оценки состояния животного присутствие обязательно.',
      },
    ],
  },
  {
    name: 'После консультации',
    icon: '📄',
    questions: [
      {
        q: 'Что я получу после консультации?',
        a: 'Вы получите письменное заключение на email в течение 2 часов. В нём: рекомендации, назначения, план лечения, сроки повторной консультации.',
      },
      {
        q: 'Можно ли получить повторную консультацию?',
        a: 'Да, повторная консультация дешевле (1 200 ₽ для терапевта). Действует в течение 30 дней после первичной.',
      },
      {
        q: 'Что делать, если животному не стало лучше?',
        a: 'Свяжитесь с нами для повторной консультации. Врач скорректирует лечение или порекомендует очный приём.',
      },
      {
        q: 'Можно ли показать заключение очному ветеринару?',
        a: 'Да, заключение — это официальный документ с рекомендациями. Вы можете показать его любому специалисту.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Частые вопросы</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Ответы на самые популярные вопросы о наших услугах
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Категории вопросов — компактные фильтры */}
      <section className="py-3 bg-white border-b border-gray-200 sticky top-[80px] sm:top-[84px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Мобильная версия — горизонтальный скролл */}
          <div className="sm:hidden">
            <div className="overflow-x-auto overflow-y-hidden -mx-3 px-3 pb-1 scrollbar-hide">
              <div className="flex gap-2 whitespace-nowrap">
                {faqCategories.map((category, index) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(index)}
                    className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all flex-shrink-0 flex items-center gap-1.5 ${
                      activeCategory === index
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-sm">{category.icon}</span>
                    <span className="max-w-[80px] truncate">{category.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Десктопная версия (sm и выше) — полный вид */}
          <div className="hidden sm:block">
            <div className="flex flex-wrap gap-2 justify-center">
              {faqCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    activeCategory === index
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Вопросы и ответы */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div key={category.name} className={activeCategory === catIndex ? 'block' : 'hidden'}>
              <FadeIn>
                <div className="space-y-3 sm:space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <div
                      key={qIndex}
                      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenQuestion(openQuestion === qIndex ? null : qIndex)}
                        className="w-full px-4 py-3 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4"
                      >
                        <span className="font-semibold text-gray-900 text-sm sm:text-lg">{item.q}</span>
                        <svg
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                            openQuestion === qIndex ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openQuestion === qIndex && (
                        <div className="px-4 pb-4 sm:px-6 sm:pb-5">
                          <div className="bg-primary-light/30 rounded-lg sm:rounded-xl p-4 sm:p-6">
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Остались вопросы?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Напишите нам — мы ответим в течение 30 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://t.me/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-sm sm:text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Написать в Telegram
              </a>
              <a
                href="mailto:consult@onlyvet.ru"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary text-primary font-semibold rounded-xl sm:rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-sm sm:text-lg"
              >
                Написать на email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
