'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import Carousel from '@/components/Carousel';

type ReviewSource = 'все' | 'yandex' | '2gis' | 'google' | 'site';

type Review = {
  id: string;
  clientName: string;
  petName?: string;
  rating: number;
  text: string;
  date: string;
  doctorId?: string;
  serviceId?: string;
  source: ReviewSource;
  hasPhotos?: boolean;
};

const reviews: Review[] = [
  {
    id: 'rev1',
    clientName: 'Екатерина С.',
    petName: 'Кошка Локи',
    rating: 5,
    text: 'Обратились к Эльвину Мазагировичу с уже поставленным диагнозом и сложной схемой лечения. Врач спокойно разобрал все анализы, объяснил, почему часть назначений можно убрать, а что важно оставить. После консультации стало намного спокойнее, появились чёткие шаги и понимание, чего ждать дальше. Очень рекомендую!',
    date: '2025-01-15',
    doctorId: 'elvin',
    serviceId: 'second-opinion',
    source: 'yandex',
    hasPhotos: true,
  },
  {
    id: 'rev2',
    clientName: 'Анна К.',
    petName: 'Собака Рекс',
    rating: 5,
    text: 'Спасибо Диане за внимательное отношение к нашему Рексу. У собаки хронический гастрит, долго не могли подобрать схему. На онлайн-консультации всё объяснили по шагам, расписали, что делать при обострениях. Очень спокойная и понятная подача. Уже через неделю заметили улучшения!',
    date: '2024-12-10',
    doctorId: 'diana',
    serviceId: 'online-consult',
    source: '2gis',
    hasPhotos: false,
  },
  {
    id: 'rev3',
    clientName: 'Мария Л.',
    petName: 'Кошка Мира',
    rating: 4,
    text: 'Обращались за разбором анализов и УЗИ. Понравилось, что врач не просто озвучил цифры, а объяснил, что именно они значат для нашей кошки. Дали подробные рекомендации по дальнейшим действиям.',
    date: '2024-11-05',
    doctorId: 'oleg',
    serviceId: 'labs-ultrasound',
    source: 'google',
    hasPhotos: true,
  },
  {
    id: 'rev4',
    clientName: 'Ольга П.',
    petName: 'Кот Барсик',
    rating: 5,
    text: 'Мы на долгосрочном сопровождении по онкологии. Врач объясняет всё спокойно и чётко, без драматизации. Очень ценим подход и профессионализм. Спасибо за поддержку в трудную минуту!',
    date: '2025-01-05',
    doctorId: 'elvin',
    serviceId: 'long-term',
    source: 'site',
    hasPhotos: false,
  },
];

const sourceLabels: Record<ReviewSource, string> = {
  'все': 'Все отзывы',
  'yandex': 'Яндекс',
  '2gis': '2ГИС',
  'google': 'Google',
  'site': 'Сайт',
};

const sourceColors: Record<ReviewSource, string> = {
  'все': '#6B7280',
  'yandex': '#FC3F18',
  '2gis': '#00A85E',
  'google': '#4285F4',
  'site': '#2C5F72',
};

const SourceIcon = ({ source, className = "w-4 h-4" }: { source: ReviewSource; className?: string }) => {
  if (source === 'все') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  return (
    <img
      src={`/images/${source}.svg`}
      alt={sourceLabels[source]}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

const truncateText = (text: string, maxLength: number = 120) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export default function ReviewsPage() {
  const [selectedSource, setSelectedSource] = useState<ReviewSource>('все');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  const filteredReviews = useMemo(() => {
    let result = reviews;
    
    if (selectedSource !== 'все') {
      result = result.filter((r) => r.source === selectedSource);
    }
    
    result = [...result].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    return result;
  }, [selectedSource, sortBy]);

  const openModal = (review: Review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const averageRating = useMemo(() => {
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero-блок */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Отзывы
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Reviews</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Истории{' '}
                <span className="text-primary">довольных клиентов</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Реальные отзывы владельцев животных, которые уже воспользовались нашими консультациями
              </p>
            </FadeIn>

            {/* Рейтинг */}
            <FadeIn delay={600}>
              <div className="flex justify-center items-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{reviews.length} отзывов</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="mr-2">📝</span>
                  Записаться на консультацию
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">ℹ️</span>
                  Посмотреть услуги
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Источник - с горизонтальным скроллом на мобильном */}
              <div className="flex overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:pb-0 lg:overflow-visible scrollbar-hide">
                <div className="flex gap-2 lg:flex-wrap">
                  {(Object.keys(sourceLabels) as ReviewSource[]).map((source) => (
                    <button
                      key={source}
                      onClick={() => setSelectedSource(source)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
                        selectedSource === source
                          ? 'text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      style={selectedSource === source ? { backgroundColor: sourceColors[source] } : {}}
                    >
                      <SourceIcon source={source} />
                      <span>{sourceLabels[source]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Сортировка и кнопка */}
              <div className="flex items-center gap-3 ml-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                  className="px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-xs font-semibold bg-white whitespace-nowrap"
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                </select>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 lg:flex-none px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all font-semibold text-sm whitespace-nowrap"
                  style={{ color: '#FFFFFF' }}
                >
                  Написать отзыв
                </button>
              </div>
            </div>

            {/* Результат - скрыт на мобильном */}
            <div className="hidden sm:block text-sm text-gray-500">
              Найдено отзывов: <span className="font-semibold text-gray-900">{filteredReviews.length}</span>
              {selectedSource !== 'все' && (
                <span className="ml-2">из <span className="font-semibold">{reviews.length}</span></span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Карусель отзывов */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredReviews.length > 0 ? (
            <Carousel itemsPerPage={3} autoPlay autoPlayInterval={6000}>
              {filteredReviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Заголовок */}
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
                    <div className="text-right">
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 flex items-center justify-end gap-1">
                        <SourceIcon source={review.source} />
                        <span>{sourceLabels[review.source]}</span>
                      </span>
                    </div>
                  </div>

                  {/* Текст отзыва (обрезанный) */}
                  <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                    {truncateText(review.text, 150)}
                  </p>

                  {/* Кнопка подробнее */}
                  <button
                    onClick={() => openModal(review)}
                    className="text-primary hover:text-primary-dark font-semibold text-sm mb-4"
                  >
                    Читать полностью →
                  </button>

                  {/* Фото */}
                  {review.hasPhotos && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">📎 Прикреплены фото</p>
                      <div className="flex gap-2">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg" />
                        <div className="w-16 h-16 bg-gray-100 rounded-lg" />
                      </div>
                    </div>
                  )}

                  {/* Дата */}
                  <p className="text-xs text-gray-400 mt-4">
                    {new Date(review.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Отзывов пока нет</h3>
              <p className="text-gray-600 mb-6">Будьте первым, кто оставит отзыв!</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all font-semibold"
                style={{ color: '#FFFFFF' }}
              >
                Написать отзыв
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Хотите оставить отзыв?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Поделитесь своим опытом — это поможет другим владельцам принять решение
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              Написать отзыв
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Модальное окно просмотра отзыва */}
      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Отзыв</h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedReview(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-2xl">🐾</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{selectedReview.clientName}</p>
                  {selectedReview.petName && (
                    <p className="text-sm text-gray-500">{selectedReview.petName}</p>
                  )}
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < selectedReview.rating ? 'text-yellow-500' : 'text-gray-300'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-sm flex items-center gap-1" style={{ color: sourceColors[selectedReview.source] }}>
                    <SourceIcon source={selectedReview.source} />
                    <span className="font-medium">{sourceLabels[selectedReview.source]}</span>
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(selectedReview.date).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedReview.text}
                </p>
              </div>

              {selectedReview.hasPhotos && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">📎 Прикрепленные фото</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gray-100 rounded-xl" />
                    <div className="aspect-square bg-gray-100 rounded-xl" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно написания отзыва */}
      {isModalOpen && !selectedReview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Написать отзыв</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Екатерина С."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Кличка питомца
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Локи"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Оценка *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="text-3xl hover:scale-110 transition-transform"
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Текст отзыва *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="Расскажите о вашем опыте..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Источник отзыва
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option value="site">Сайт</option>
                    <option value="yandex">Яндекс</option>
                    <option value="2gis">2ГИС</option>
                    <option value="google">Google</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Прикрепить фото
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-sm text-yellow-800">
                    ⏳ Ваш отзыв будет опубликован после проверки модератором
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all font-semibold"
                  style={{ color: '#FFFFFF' }}
                >
                  Отправить на модерацию
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
