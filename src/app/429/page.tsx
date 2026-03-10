'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function TooManyRequestsPage() {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light/30 flex items-center justify-center px-4">
      <FadeIn>
        <div className="text-center max-w-2xl">
          {/* Иконка */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-xl mb-6">
              <span className="text-8xl">⏳</span>
            </div>
            <h1 className="text-9xl font-bold text-primary mb-4">429</h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Слишком много запросов
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Вы сделали очень много запросов за короткое время. 
            Пожалуйста, подождите немного.
          </p>

          {/* Таймер */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-gray-600 mb-4">
              Автоматическая разблокировка через:
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold">
                {countdown}
              </div>
              <span className="text-gray-500 text-lg">секунд</span>
            </div>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              🏠 На главную
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
            >
              📖 Блог
            </Link>
          </div>

          {/* Контакты */}
          <div className="mt-8 text-sm text-gray-500">
            <p>Если проблема не исчезнет, напишите нам:</p>
            <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline font-medium">
              consult@onlyvet.ru
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
