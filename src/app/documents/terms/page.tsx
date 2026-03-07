'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const sections = [
  { id: 'general', title: '1. Общие положения' },
  { id: 'terms', title: '2. Основные понятия' },
  { id: 'services', title: '3. Услуги сервиса' },
  { id: 'registration', title: '4. Регистрация и аккаунт' },
  { id: 'payment', title: '5. Оплата и возврат' },
  { id: 'responsibility', title: '6. Ответственность сторон' },
  { id: 'privacy', title: '7. Конфиденциальность' },
  { id: 'changes', title: '8. Изменения в соглашении' },
  { id: 'contacts', title: '9. Контакты' },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0}>
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light mb-6">
                  <span className="text-4xl">📄</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Пользовательское соглашение
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Правила использования сервиса OnlyVet
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Последнее обновление: 6 марта 2026 г.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Контент */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Оглавление */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <nav className="space-y-2">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Содержание</h3>
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(section.id);
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`block px-4 py-2 rounded-lg text-sm transition-all ${
                        activeSection === section.id
                          ? 'bg-primary-light text-primary font-semibold'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-primary-light rounded-xl">
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold">Нужна помощь?</span>
                  </p>
                  <a
                    href="mailto:consult@onlyvet.ru"
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    consult@onlyvet.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Текст документа */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <FadeIn delay={200}>
                  <div id="general" className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Общие положения</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        1.1. Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между пользователем (далее — Пользователь) и сервисом OnlyVet (далее — Исполнитель) в части использования онлайн-сервиса ветеринарных консультаций.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        1.2. Настоящее Соглашение является публичной офертой в соответствии с законодательством Российской Федерации.
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        1.3. Начиная использовать сервис OnlyVet, Пользователь полностью принимает условия настоящего Соглашения.
                      </p>
                    </div>
                  </div>

                  <div id="terms" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Основные понятия</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-light p-4 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-2">Онлайн-консультация</h3>
                        <p className="text-sm text-gray-600">Дистанционная форма ветеринарной помощи через видеосвязь или чат</p>
                      </div>
                      <div className="bg-primary-light p-4 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-2">Письменное заключение</h3>
                        <p className="text-sm text-gray-600">Документ с рекомендациями врача по итогам консультации</p>
                      </div>
                      <div className="bg-primary-light p-4 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-2">Пользователь</h3>
                        <p className="text-sm text-gray-600">Владелец животного, использующий сервис OnlyVet</p>
                      </div>
                      <div className="bg-primary-light p-4 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-2">Исполнитель</h3>
                        <p className="text-sm text-gray-600">Ветеринарный врач, оказывающий услуги через сервис</p>
                      </div>
                    </div>
                  </div>

                  <div id="services" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Услуги сервиса</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        3.1. Исполнитель обязуется предоставлять Пользователю услуги дистанционных ветеринарных консультаций, а Пользователь обязуется оплачивать эти услуги.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        3.2. Услуги оказываются дистанционно посредством связи через интернет.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-xl">
                        <div className="flex items-start gap-3">
                          <span className="text-green-500 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Онлайн-консультации</h4>
                            <p className="text-sm text-gray-600">Первичный и повторный приём</p>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-xl">
                        <div className="flex items-start gap-3">
                          <span className="text-green-500 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Разбор анализов</h4>
                            <p className="text-sm text-gray-600">Интерпретация исследований</p>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-xl">
                        <div className="flex items-start gap-3">
                          <span className="text-green-500 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Второе мнение</h4>
                            <p className="text-sm text-gray-600">Независимая оценка диагноза</p>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-xl">
                        <div className="flex items-start gap-3">
                          <span className="text-green-500 text-xl">✓</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Сопровождение</h4>
                            <p className="text-sm text-gray-600">Ведение хронических пациентов</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="registration" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Регистрация и аккаунт</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        4.1. Для получения услуг Пользователь должен зарегистрироваться на сайте или оставить заявку через форму записи.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        4.2. Пользователь обязуется предоставлять достоверную информацию при регистрации.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        4.3. Пользователь несёт ответственность за сохранность данных своей учётной записи.
                      </p>
                    </div>
                  </div>

                  <div id="payment" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Оплата и возврат</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h3 className="font-semibold text-gray-900 mb-4">5.1. Порядок оплаты</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Оплата производится после согласования времени консультации и перед началом оказания услуги. Принимаем оплату банковскими картами и банковским переводом.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h3 className="font-semibold text-gray-900 mb-4">5.2. Возврат средств</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-500 text-lg mt-0.5">✓</span>
                          <span className="text-gray-700">Полный возврат при отмене более чем за 24 часа до консультации</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-yellow-500 text-lg mt-0.5">⚠</span>
                          <span className="text-gray-700">50% возврат при отмене менее чем за 24 часа</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-red-500 text-lg mt-0.5">✕</span>
                          <span className="text-gray-700">Возврат не производится после начала оказания услуги</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="responsibility" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Ответственность сторон</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-primary-light p-6 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-4">Ответственность Исполнителя</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Предоставление квалифицированной консультации</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Обоснование рекомендаций</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Конфиденциальность информации</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Своевременное направление на очный приём</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-primary-light p-6 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-4">Ответственность Пользователя</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Предоставление полной информации</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Следование рекомендациям врача</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Своевременное сообщение об изменениях</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Обращение за очной помощью при ухудшении</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div id="privacy" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Конфиденциальность</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        7.1. Все предоставленные данные (история болезни, анализы, личная информация) хранятся конфиденциально и не передаются третьим лицам.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        7.2. Мы используем защищённые каналы связи и соблюдаем политику конфиденциальности в соответствии с законодательством РФ.
                      </p>
                    </div>
                  </div>

                  <div id="changes" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Изменения в соглашении</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        8.1. Исполнитель оставляет за собой право вносить изменения в настоящее Соглашение в одностороннем порядке. Актуальная версия всегда доступна на сайте.
                      </p>
                    </div>
                  </div>

                  <div id="contacts" className="scroll-mt-32 mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Контакты</h2>
                    <div className="bg-gradient-to-r from-primary-light to-secondary-light p-8 rounded-2xl">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">По вопросам обращайтесь:</h3>
                      <div className="space-y-3">
                        <p className="text-gray-700">
                          <span className="font-semibold">Email:</span>{' '}
                          <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline">
                            consult@onlyvet.ru
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Телефон:</span>{' '}
                          <a href="tel:+79000000000" className="text-primary hover:underline">
                            +7 900 000-00-00
                          </a>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-semibold">Telegram:</span>{' '}
                          <a href="https://t.me/onlyvet_clinic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            @onlyvet_clinic
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Остались вопросы?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Если у вас возникли вопросы по условиям работы сервиса, напишите нам
            </p>
            <a
              href="mailto:consult@onlyvet.ru"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              Написать нам
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
