'use client';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light/30 flex items-center justify-center">
      <div className="text-center">
        {/* Логотип с анимацией */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-primary-light rounded-full animate-ping" />
            <div className="absolute inset-0 border-4 border-primary rounded-full animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl animate-bounce">🐾</span>
            </div>
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-primary rounded-full animate-progress" />
        </div>

        {/* Текст загрузки */}
        <p className="text-gray-600 font-medium animate-pulse">
          Загружаем OnlyVet...
        </p>

        {/* Дополнительные индикаторы */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
