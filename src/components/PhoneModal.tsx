'use client';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  displayNumber: string;
}

export default function PhoneModal({ isOpen, onClose, phoneNumber, displayNumber }: PhoneModalProps) {
  if (!isOpen) return null;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[10000] grid place-items-center p-4"
      style={{ minHeight: '100vh' }}
    >
      {/* Затемнение фона */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Модальное окно */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
        style={{ 
          animation: 'modalSlideIn 0.3s ease-out',
          zIndex: 10001
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Закрыть"
        >
          ✕
        </button>

        {/* Иконка телефона */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-3xl">📞</span>
        </div>

        {/* Заголовок */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
          Звонок в регистратуру
        </h3>

        {/* Информация */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-700 text-center mb-3">
            Вы собираетесь позвонить по номеру:
          </p>
          <a 
            href={`tel:${phoneNumber}`}
            className="text-3xl font-bold text-green-600 hover:text-green-700 transition-colors block text-center"
          >
            {displayNumber}
          </a>
        </div>

        {/* Детали */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Рабочее время: <strong>Пн-Пт 9:00-20:00, Сб-Вс 10:00-18:00</strong></span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Запись на консультацию к ветеринару</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>Консультация по услугам и ценам</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-amber-500 mt-0.5">⚠</span>
            <span>В экстренных случаях обращайтесь в ближайшую клинику</span>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
          >
            Отмена
          </button>
          <button
            onClick={handleCall}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2"
          >
            📞 Позвонить
          </button>
        </div>
      </div>
    </div>
  );
}
