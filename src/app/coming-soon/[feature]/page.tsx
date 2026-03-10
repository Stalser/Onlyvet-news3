'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

interface ComingSoonPageProps {
  params: Promise<{ feature: string }>;
}

export default async function ComingSoonPage({ params }: ComingSoonPageProps) {
  const { feature } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light/30 flex items-center justify-center px-4">
      <FadeIn>
        <div className="text-center max-w-2xl">
          {/* Заголовок */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Скоро!</h1>
            <p className="text-xl text-primary font-semibold mb-2">Функция в разработке</p>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Мы работаем над этим разделом. Совсем скоро он станет доступен!
          </p>

          {/* Что готовим */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Что мы готовим:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500">✓</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Улучшенный интерфейс</h3>
                  <p className="text-sm text-gray-600">Более удобный и современный дизайн</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500">✓</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Новые возможности</h3>
                  <p className="text-sm text-gray-600">Дополнительные функции для вашего удобства</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-500">⏳</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">Финальное тестирование</h3>
                  <p className="text-sm text-gray-600">Проверяем всё перед запуском</p>
                </div>
              </div>
            </div>
          </div>

          {/* Уведомление о запуске */}
          <div className="bg-primary-light rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Хотите узнать о запуске первыми?</h3>
            <p className="text-gray-600 mb-4">
              Подпишитесь на наши уведомления:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://t.me/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Telegram канал
              </a>
              <a
                href="mailto:consult@onlyvet.ru?subject=Уведомить о запуске"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                Email
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              На главную
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
