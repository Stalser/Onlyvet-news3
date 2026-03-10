'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function ThanksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-br from-primary-light via-white to-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            {/* Иконка успеха */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 mb-6 animate-bounce-slow">
                <svg className="w-14 h-14 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Заявка отправлена!
              </h1>
              <p className="text-xl text-gray-600">
                Спасибо, что выбрали OnlyVet
              </p>
            </div>

            {/* Основной блок */}
            <section className="bg-white rounded-3xl border border-emerald-200 shadow-xl p-8 mb-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Мы получили вашу заявку
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Администратор уже уведомлён и проверит вашу заявку в течение <span className="font-semibold text-emerald-700">1-2 часов</span> в рабочее время (с 9:00 до 21:00 МСК).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Мы свяжемся с вами
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Позвоним по указанному телефону или напишем в Telegram для подтверждения времени консультации и уточнения деталей.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Подготовьтесь к консультации
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Заранее подготовьте результаты анализов, снимки и список вопросов — это поможет врачу дать более точные рекомендации.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Блок с контактами */}
            <section className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                📞 Нужна срочная помощь?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="tel:+79000000000"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all font-semibold shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Позвонить
                </a>
                
                <a
                  href="https://t.me/onlyvet_clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-all font-semibold shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.91 1.21-5.4 3.57-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.65-2.88 8.01-3.46 3.82-1.62 4.61-1.91 5.13-1.92.11 0 .37.03.54.17.14.12.18.28.2.45-.01.07-.01.14-.02.21z"/>
                  </svg>
                  Telegram
                </a>
              </div>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Email: <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline">consult@onlyvet.ru</a>
              </p>
            </section>

            {/* Полезные ссылки */}
            <section className="bg-primary-light rounded-3xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                📚 Полезная информация
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/how-it-works"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Как это работает</p>
                    <p className="text-sm text-gray-500">Процесс консультации</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/setup"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Настройка приложений</p>
                    <p className="text-sm text-gray-500">Яндекс.Телемост</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/faq"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">FAQ</p>
                    <p className="text-sm text-gray-500">Частые вопросы</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Услуги и цены</p>
                    <p className="text-sm text-gray-500">Все услуги</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                На главную
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
              >
                Новая заявка
              </Link>
            </div>

            {/* Дисклеймер */}
            <p className="text-center text-gray-500 text-sm mt-8">
              ⚠️ Если у вашего питомца экстренная ситуация — немедленно обратитесь в ближайшую ветеринарную клинику
            </p>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}
