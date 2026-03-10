'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light/30 flex items-center justify-center px-4">
      <FadeIn>
        <div className="text-center max-w-2xl">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Упс!</h1>
            <h2 className="text-3xl font-bold text-primary mb-6">Технические работы</h2>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Мы обновляем сервис, чтобы стать лучше для вас и ваших питомцев!
          </p>

          {/* Прогресс работ */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold animate-spin">
                ⚙️
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Сайт временно недоступен. Мы скоро вернёмся!
            </p>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-progress" style={{ width: '75%' }} />
            </div>
            <p className="text-sm text-gray-500 mt-2">Примерное время окончания: 15 минут</p>
          </div>

          {/* Что мы делаем */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-1">Улучшения</h3>
              <p className="text-sm text-gray-600">Новый функционал</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-1">Безопасность</h3>
              <p className="text-sm text-gray-600">Защита данных</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-1">Скорость</h3>
              <p className="text-sm text-gray-600">Оптимизация</p>
            </div>
          </div>

          {/* Контакты для связи */}
          <div className="bg-primary-light rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Срочная консультация?</h3>
            <p className="text-gray-600 mb-4">
              Напишите нам в Telegram или позвоните:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://t.me/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Telegram
              </a>
              <a
                href="tel:+79000000000"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                +7 900 000-00-00
              </a>
            </div>
          </div>

          {/* Ссылка на главную */}
          <div className="mt-8">
            <Link href="/" className="text-primary hover:underline font-medium">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </FadeIn>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 75%; }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
