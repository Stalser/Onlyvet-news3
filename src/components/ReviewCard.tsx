import type { Review } from '@/data/reviews';

interface ReviewCardProps {
  review: Review;
}

const sourceLabels: Record<string, string> = {
  yandex: 'Яндекс',
  '2gis': '2ГИС',
  google: 'Google',
  site: 'Сайт',
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="
        bg-white
        p-6
        rounded-2xl
        border border-gray-200
        shadow-sm
      "
    >
      {/* Заголовок с рейтингом */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
            <span className="text-xl">🐾</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.clientName}</p>
            {review.petName && (
              <p className="text-sm text-gray-500">{review.petName}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {sourceLabels[review.source]}
          </span>
        </div>
      </div>

      {/* Текст отзыва */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {review.text}
      </p>

      {/* Дата */}
      <p className="text-xs text-gray-400">
        {new Date(review.date).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </article>
  );
}
