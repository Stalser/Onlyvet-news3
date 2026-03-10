'use client';

import { useEffect, useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 z-50 flex items-center justify-center px-4">
      <FadeIn>
        <div className="text-center max-w-md">
          {/* Иконка оффлайн */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 shadow-lg mb-4">
              <span className="text-5xl">📡</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Нет соединения с интернетом
          </h2>
          <p className="text-gray-600 mb-6">
            Проверьте подключение к сети и попробуйте снова
          </p>

          {/* Индикатор статуса */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-red-700 font-medium">Оффлайн</span>
            </div>
          </div>

          {/* Кнопка проверки */}
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
            style={{ color: '#FFFFFF' }}
          >
            🔄 Проверить подключение
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
