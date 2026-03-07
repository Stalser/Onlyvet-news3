'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light mb-6">
                  <span className="text-4xl">🔒</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Политика конфиденциальности
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Как мы собираем, храним и защищаем ваши персональные данные
                </p>
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
                <p className="text-gray-700 leading-relaxed">
                  1.1. Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сервиса OnlyVet.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  1.2. Мы серьёзно относимся к защите вашей конфиденциальности и соблюдаем законодательство Российской Федерации о персональных данных.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Какие данные мы собираем</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-light p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    Персональные данные
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• ФИО</li>
                    <li>• Контактный телефон</li>
                    <li>• Адрес электронной почты</li>
                    <li>• Telegram или другие мессенджеры</li>
                  </ul>
                </div>
                <div className="bg-primary-light p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🐾</span>
                    Данные о питомце
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Кличка животного</li>
                    <li>• Вид, порода, возраст</li>
                    <li>• Медицинская история</li>
                    <li>• Результаты анализов</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Как мы используем данные</h2>
              <div className="space-y-4 mb-8">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">🩺 Оказание услуг</h3>
                  <p className="text-gray-600 text-sm">Для проведения консультаций, постановки диагноза и назначения лечения</p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">📞 Связь с пользователем</h3>
                  <p className="text-gray-600 text-sm">Для подтверждения записи и предоставления информации об услугах</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Хранение и защита</h2>
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Мы используем защищённые протоколы передачи данных, регулярное резервное копирование и ограниченный доступ уполномоченных сотрудников.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Права пользователя</h2>
              <div className="bg-primary-light p-6 rounded-xl mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">Вы имеете право:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Получить копию своих данных</li>
                  <li>✓ Исправить неточные данные</li>
                  <li>✓ Удалить свои данные</li>
                  <li>✓ Отозвать согласие на обработку</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Контакты</h2>
              <div className="bg-gradient-to-r from-primary-light to-secondary-light p-8 rounded-2xl">
                <p className="text-gray-700 mb-4">
                  По вопросам обработки персональных данных обращайтесь:
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:privacy@onlyvet.ru" className="text-primary hover:underline">
                    privacy@onlyvet.ru
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
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
              Если у вас возникли вопросы по обработке персональных данных, напишите нам
            </p>
            <a
              href="mailto:privacy@onlyvet.ru"
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
