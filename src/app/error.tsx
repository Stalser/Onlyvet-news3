'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <FadeIn>
        <div className="text-center max-w-2xl">
          {/* Анимация ошибки */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-xl mb-6 animate-bounce">
              <span className="text-8xl">⚠️</span>
            </div>
            <h1 className="text-9xl font-bold text-red-500 mb-4">500</h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ошибка сервера
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Что-то пошло не так на нашей стороне. Мы уже работаем над исправлением!
          </p>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              🔄 Попробовать снова
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
            >
              🏠 На главную
            </Link>
          </div>

          {/* Таймер автоперезагрузки */}
          {countdown > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <p className="text-gray-600 mb-4">
                Автоматическая перезагрузка через:
              </p>
              <div className="flex justify-center items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {countdown}
                </div>
                <span className="text-gray-500">секунд</span>
              </div>
            </div>
          )}

          {/* Информация об ошибке (в разработке) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-left">
              <h3 className="font-semibold text-red-900 mb-2">Детали ошибки:</h3>
              <pre className="text-sm text-red-700 overflow-auto bg-white p-4 rounded-lg">
                {error.message}
              </pre>
            </div>
          )}

          {/* Контакты */}
          <div className="mt-8 text-sm text-gray-500">
            <p>Если проблема не исчезнет, сообщите нам:</p>
            <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline font-medium">
              consult@onlyvet.ru
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
