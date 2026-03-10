'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function YandexWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex flex-col items-end gap-2">
      {/* Кнопки (показываются при раскрытии) */}
      {isExpanded && (
        <>
          {/* Яндекс.Телемост */}
          <a
            href="https://telemost.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-xl shadow-lg border-2 border-emerald-400 px-2.5 py-2 sm:px-4 sm:py-2.5 hover:shadow-xl hover:scale-105 transition-all duration-200"
            title="Открыть Яндекс.Телемост"
          >
            <Image
              src="/images/YandexTelemost.svg"
              alt="Яндекс.Телемост"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Телемост</span>
          </a>

          {/* Яндекс.Мессенджер */}
          <a
            href="https://messenger.yandex.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-xl shadow-lg border-2 border-sky-400 px-2.5 py-2 sm:px-4 sm:py-2.5 hover:shadow-xl hover:scale-105 transition-all duration-200"
            title="Открыть Яндекс.Мессенджер"
          >
            <Image
              src="/images/Yandex.messanger.svg"
              alt="Яндекс.Мессенджер"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Мессенджер</span>
          </a>
        </>
      )}

      {/* Главная кнопка */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1.5 sm:gap-2 bg-primary text-white rounded-xl shadow-lg px-3 py-2 sm:px-4 sm:py-2.5 hover:bg-primary-dark hover:shadow-xl transition-all duration-200"
        title="Быстрая связь"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Связь</span>
      </button>
    </div>
  );
}
