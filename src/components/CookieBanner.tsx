'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const hasConsent = localStorage.getItem('cookie-consent');
    
    // Показываем баннер с задержкой
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
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-300 ${
        isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Иконка и текст */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍪</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Мы используем cookies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Используем файлы cookie для улучшения работы сайта, анализа трафика и персонализации контента. 
                  Продолжая использовать сайт, вы соглашаетесь с нашей{' '}
                  <Link href="/documents/cookies" className="text-primary hover:underline font-medium">
                    политикой использования cookies
                  </Link>.
                </p>
              </div>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={handleAccept}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ color: '#FFFFFF' }}
              >
                Принять
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                Отказаться
              </button>
              <Link
                href="/documents/cookies"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-all duration-300"
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
