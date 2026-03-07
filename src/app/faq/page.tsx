'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const faqCategories = [
  {
    name: 'Общее',
    questions: [
      {
        question: 'Что такое онлайн-консультация ветеринара?',
        answer: 'Онлайн-консультация — это дистанционная форма ветеринарной помощи, при которой врач общается с владельцем животного через видеосвязь или чат. Врач изучает историю болезни, симптомы, результаты анализов и даёт рекомендации по лечению или дальнейшей диагностике.',
      },
      {
        question: 'Чем онлайн-консультация отличается от очного приёма?',
        answer: 'Главное отличие — отсутствие физического осмотра. Врач не может пропальпировать, прослушать животное или провести процедуры. Однако онлайн-формат позволяет оценить состояние по описанию, интерпретировать анализы, скорректировать лечение и дать рекомендации по дальнейшим действиям.',
      },
      {
        question: 'В каких случаях подходит онлайн-консультация?',
        answer: 'Онлайн-консультация подходит для: разбора симптомов, интерпретации анализов, получения второго мнения, сопровождения хронических заболеваний, вопросов по уходу и питанию, корректировки лечения. Не подходит для экстренных случаев (травмы, отравления, кровотечения).',
      },
      {
        question: 'Какие документы нужно подготовить?',
        answer: 'Желательно подготовить: историю болезни (когда появились симптомы, что менялось), результаты анализов и исследований (фото или сканы), предыдущие назначения и их эффективность, видео с необычным поведением или симптомами (если есть).',
      },
    ],
  },
  {
    name: 'Запись и оплата',
    questions: [
      {
        question: 'Как записаться на консультацию?',
        answer: 'Напишите нам на электронную почту consult@onlyvet.ru или заполните форму на сайте. Опишите кратко ситуацию и приложите имеющиеся документы. Мы свяжемся с вами в течение 24 часов для уточнения деталей и согласования времени.',
      },
      {
        question: 'Сколько стоит консультация?',
        answer: 'Стоимость зависит от типа консультации: первичная консультация — от 2 500 ₽, разбор анализов — от 1 800 ₽, второе мнение — от 3 000 ₽, сопровождение хронического пациента — от 2 000 ₽/месяц. Точная стоимость определяется после оценки сложности случая.',
      },
      {
        question: 'Как происходит оплата?',
        answer: 'Оплата производится после согласования времени консультации и перед началом услуги. Принимаем оплату банковскими картами и банковским переводом. После оплаты вы получаете чек и подтверждение записи.',
      },
      {
        question: 'Можно ли отменить или перенести консультацию?',
        answer: 'Да, можно отменить или перенести консультацию не позднее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа оплата не возвращается, но мы можем предложить перенос на другое время.',
      },
    ],
  },
  {
    name: 'Процесс консультации',
    questions: [
      {
        question: 'Как проходит видеоконсультация?',
        answer: 'Вы получаете ссылку на видеозвонок (Zoom, Telegram или WhatsApp). Консультация длится 30–60 минут. Врач задаёт вопросы, уточняет детали, при необходимости просит показать животное ближе. После звонка вы получаете письменное заключение.',
      },
      {
        question: 'Что такое письменное заключение?',
        answer: 'Это документ с подробными рекомендациями: резюме консультации, интерпретация симптомов и анализов, рекомендации по дополнительным исследованиям, схема лечения (если требуется), план наблюдения и контрольные точки. Заключение остаётся у вас навсегда.',
      },
      {
        question: 'Можно ли получить консультацию в чате?',
        answer: 'Да, для разбора анализов и вторых мнений возможна текстовая консультация в чате (email или мессенджер). Вы отправляете все данные, врач изучает и отвечает в течение 24 часов с подробным заключением.',
      },
      {
        question: 'Сколько времени занимает ответ?',
        answer: 'Обычно мы связываемся в течение 24 часов после получения заявки. Текстовые консультации с разбором анализов готовятся в течение 24–48 часов. Видеоконсультации назначаются на удобное время в течение 3–5 дней.',
      },
    ],
  },
  {
    name: 'Экстренные ситуации',
    questions: [
      {
        question: 'Что делать в экстренном случае?',
        answer: 'В экстренных случаях (травма, отравление, кровотечение, судороги, затруднённое дыхание) немедленно обращайтесь в ближайшую ветеринарную клинику. Онлайн-консультация не подходит для оказания экстренной помощи.',
      },
      {
        question: 'Можете ли вы порекомендовать клинику?',
        answer: 'Да, мы можем порекомендовать проверенные клиники в вашем городе. Также после онлайн-консультации врач может дать направление в специализированный центр, если требуется узкопрофильная помощь.',
      },
      {
        question: 'Что если во время консультации выяснится, что нужен очный приём?',
        answer: 'Врач сразу сообщит об этом и порекомендует ближайшую клинику. В таком случае консультация всё равно оплачивается полностью, но вы получаете чёткий план действий и понимание, что нужно делать дальше.',
      },
    ],
  },
  {
    name: 'Конфиденциальность',
    questions: [
      {
        question: 'Как защищаются мои данные?',
        answer: 'Все предоставленные данные (история болезни, анализы, личная информация) хранятся конфиденциально и не передаются третьим лицам. Мы используем защищённые каналы связи и соблюдаем политику конфиденциальности.',
      },
      {
        question: 'Можно ли остаться анонимным?',
        answer: 'Да, вы можете не указывать свои личные данные, только информацию о животном. Для консультации достаточно имени и контактных данных для связи.',
      },
      {
        question: 'Используются ли мои данные для обучения?',
        answer: 'Только с вашего письменного согласия. Иногда мы просим разрешение использовать анонимизированные случаи для образовательных целей. Вы всегда можете отказаться.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

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
                    FAQ
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Частые вопросы</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Ответы на{' '}
                <span className="text-primary">популярные вопросы</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Не нашли ответ на свой вопрос? Напишите нам — мы с радостью поможем!
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
                <a
                  href="mailto:consult@onlyvet.ru"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">✉️</span>
                  Написать нам
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-12">
              <FadeIn delay={categoryIndex * 100}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.name}
                </h2>
              </FadeIn>
              <div className="space-y-4">
                {category.questions.map((qa, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === index;

                  return (
                    <FadeIn key={questionIndex} delay={questionIndex * 50}>
                      <div className="border border-gray-200 rounded-2xl overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-8">
                            {qa.question}
                          </span>
                          <span
                            className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {qa.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Напишите нам — мы с радостью ответим на любой вопрос
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:consult@onlyvet.ru"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Написать нам
              </a>
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
