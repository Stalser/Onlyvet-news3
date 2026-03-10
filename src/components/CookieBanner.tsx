'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    const timer = setTimeout(() => {
      if (!hasConsent) {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 100);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsAnimating(false);
    setTimeout(() => {
      localStorage.setItem('cookie-consent', 'true');
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 transition-all duration-300 ${
        isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 md:p-8">
          {/* Мобильная версия: компактная */}
          <div className="flex flex-col gap-4">
            {/* Заголовок с иконкой */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                <span className="text-lg sm:text-xl">🍪</span>
              </div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                Мы используем cookies
              </h3>
            </div>

            {/* Текст */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Используем cookie для улучшения работы сайта, анализа трафика и персонализации контента.
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <Link href="/documents/cookies" className="text-primary hover:underline font-medium whitespace-nowrap">
                политикой cookies
              </Link>.
            </p>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white font-semibold rounded-lg sm:rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg text-sm sm:text-base"
                style={{ color: '#FFFFFF' }}
              >
                Принять
              </button>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
              >
                Отказаться
              </button>
              <Link
                href="/documents/cookies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-primary text-primary font-semibold rounded-lg sm:rounded-xl hover:bg-primary-light transition-all duration-300 text-center text-sm sm:text-base"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
