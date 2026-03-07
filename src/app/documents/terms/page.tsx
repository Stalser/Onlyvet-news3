'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light mb-6">
                  <span className="text-4xl">📄</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Пользовательское соглашение</h1>
                <p className="text-xl text-gray-600 leading-relaxed">Правила использования сервиса OnlyVet</p>
                <p className="text-sm text-gray-500 mt-4">Последнее обновление: 6 марта 2026 г.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Контент */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Общие положения</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed">1.1. Настоящее Пользовательское соглашение регулирует отношения между пользователем и сервисом OnlyVet в части использования онлайн-сервиса ветеринарных консультаций.</p>
                <p className="text-gray-700 leading-relaxed mt-4">1.2. Настоящее Соглашение является публичной офертой в соответствии с законодательством Российской Федерации.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Основные понятия</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Онлайн-консультация</h3>
                  <p className="text-sm text-gray-600">Дистанционная форма ветеринарной помощи через видеосвязь или чат</p>
                </div>
                <div className="bg-primary-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Письменное заключение</h3>
                  <p className="text-sm text-gray-600">Документ с рекомендациями врача по итогам консультации</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Услуги сервиса</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">3.1. Исполнитель обязуется предоставлять Пользователю услуги дистанционных ветеринарных консультаций, а Пользователь обязуется оплачивать эти услуги.</p>
                <div className="grid md:grid-cols-2 gap-3 mt-4">
                  <div className="flex items-start gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-700">Онлайн-консультации</span></div>
                  <div className="flex items-start gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-700">Разбор анализов</span></div>
                  <div className="flex items-start gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-700">Второе мнение</span></div>
                  <div className="flex items-start gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-700">Сопровождение</span></div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Регистрация и аккаунт</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed">4.1. Для получения услуг Пользователь должен зарегистрироваться на сайте или оставить заявку через форму записи. Пользователь обязуется предоставлять достоверную информацию.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Оплата и возврат</h2>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">5.1. Порядок оплаты</h3>
                  <p className="text-gray-700 text-sm">Оплата производится после согласования времени консультации и перед началом оказания услуги.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">5.2. Возврат средств</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-green-500">✓</span><span>Полный возврат при отмене более чем за 24 часа</span></li>
                    <li className="flex items-start gap-2"><span className="text-yellow-500">⚠</span><span>50% возврат при отмене менее чем за 24 часа</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-500">✕</span><span>Возврат не производится после начала оказания услуги</span></li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Ответственность сторон</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-light p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Ответственность Исполнителя</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Предоставление квалифицированной консультации</li>
                    <li>• Обоснование рекомендаций</li>
                    <li>• Конфиденциальность информации</li>
                  </ul>
                </div>
                <div className="bg-primary-light p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Ответственность Пользователя</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Предоставление полной информации</li>
                    <li>• Следование рекомендациям врача</li>
                    <li>• Своевременное сообщение об изменениях</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Конфиденциальность</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed">7.1. Все предоставленные данные хранятся конфиденциально и не передаются третьим лицам. Мы используем защищённые каналы связи и соблюдаем законодательство РФ.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Изменения в соглашении</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed">8.1. Исполнитель оставляет за собой право вносить изменения в настоящее Соглашение. Актуальная версия всегда доступна на сайте.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Контакты</h2>
              <div className="bg-gradient-to-r from-primary-light to-secondary-light p-8 rounded-2xl mb-8">
                <p className="text-gray-700 mb-4">По вопросам обращайтесь:</p>
                <p className="text-gray-700"><span className="font-semibold">Email:</span> <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline">consult@onlyvet.ru</a></p>
                <p className="text-gray-700"><span className="font-semibold">Telegram:</span> <a href="https://t.me/onlyvet_clinic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@onlyvet_clinic</a></p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Остались вопросы?</h2>
            <p className="text-lg text-gray-600 mb-8">Если у вас возникли вопросы по условиям работы сервиса, напишите нам</p>
            <a href="mailto:consult@onlyvet.ru" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg" style={{ color: '#FFFFFF' }}>Написать нам</a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
