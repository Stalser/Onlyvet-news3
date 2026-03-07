'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';

const values = [
  {
    icon: '🩺',
    title: 'Профессионализм',
    description: 'Все врачи имеют высшее ветеринарное образование и регулярно повышают квалификацию.',
  },
  {
    icon: '📚',
    title: 'Доказательная медицина',
    description: 'Рекомендации основаны на современных научных данных и международных протоколах.',
  },
  {
    icon: '❤️',
    title: 'Забота о пациентах',
    description: 'Главный приоритет — благополучие животных. Минимизируем стресс от визитов в клинику.',
  },
  {
    icon: '🔒',
    title: 'Прозрачность',
    description: 'Чёткие правила работы, понятное ценообразование и полная конфиденциальность.',
  },
];

const benefits = [
  {
    title: 'Для владельцев',
    items: [
      'Экономия времени — не нужно ехать в клинику',
      'Отсутствие стресса для животного',
      'Быстрый доступ к экспертному мнению',
      'Возможность получить второе мнение',
      'Сопровождение хронических заболеваний без частых визитов',
    ],
  },
  {
    title: 'Для животных',
    items: [
      'Минимум стресса — остаются в привычной обстановке',
      'Отсутствие риска внутрибольничных инфекций',
      'Комфортная среда для пожилых и пугливых животных',
      'Своевременная помощь без задержек',
    ],
  },
];

const principles = [
  'Онлайн-консультация не заменяет очный приём, когда он необходим',
  'Врач всегда сообщает о пределах своих возможностей дистанционно',
  'При подозрении на экстренное состояние — немедленное направление в клинику',
  'Рекомендации даются с объяснением логики назначений',
  'Владелец получает письменное заключение для сохранения информации',
];

export default function AboutPage() {
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
                    О сервисе
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">About OnlyVet</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональный сервис{' '}
                <span className="text-primary">онлайн-ветеринарии</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Помогаем владельцам кошек и собак получать экспертную помощь дистанционно, 
                без стресса для питомцев
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

      {/* Философия */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Наша философия
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  OnlyVet — это не клиника с офлайн-приёмами и не маркетплейс ветеринарных услуг. 
                  Это экспертная онлайн-платформа, где ветеринарные специалисты помогают владельцам животных.
                </p>
                <p>
                  Мы верим, что качественная ветеринарная помощь должна быть доступной и удобной. 
                  Онлайн-формат не заменяет очный приём полностью, но помогает владельцам принимать 
                  безопасные и обоснованные решения о здоровье питомцев.
                </p>
                <p>
                  Наша миссия — снизить количество ненужных визитов в клинику, обеспечить своевременный 
                  доступ к экспертному мнению и сопровождать хронических пациентов без дополнительного стресса.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Наши ценности
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScaleIn key={value.title} delay={index * 100}>
                <div className="p-6 bg-white rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Преимущества онлайн-формата
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((section, index) => (
              <ScaleIn key={section.title} delay={index * 100}>
                <div className="bg-gray-50 p-8 rounded-3xl">
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

      {/* Принципы работы */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Принципы работы
            </h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl">
                    <span className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-2">{principle}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы записаться на консультацию?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Получите профессиональную помощь для вашего питомца без стресса и поездок в клинику
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
