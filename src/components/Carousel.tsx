'use client';

import { useState, useEffect, useCallback, useRef, TouchEvent } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerPage?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({
  children,
  itemsPerPage = 3,
  autoPlay = true,
  autoPlayInterval = 5000
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Адаптивное количество элементов на странице
  const [actualItemsPerPage, setActualItemsPerPage] = useState(itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) {
        setActualItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setActualItemsPerPage(2);
      } else {
        setActualItemsPerPage(itemsPerPage);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, [itemsPerPage]);

  const totalItems = children.length;
  const totalPages = Math.ceil(totalItems / actualItemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Свайп жесты
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Автоплей
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, nextSlide, autoPlayInterval]);

  // Показывать ли навигацию
  const showNavigation = totalPages > 1;

  return (
    <div
      ref={carouselRef}
      className="relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Контейнер слайдов */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 sm:px-4"
              style={{ minWidth: `${100 / actualItemsPerPage}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Навигация */}
      {showNavigation && (
        <>
          {/* Кнопки влево/вправо */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-xl hover:bg-white transition-all duration-300 z-10 active:scale-95"
            aria-label="Предыдущий"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-xl hover:bg-white transition-all duration-300 z-10 active:scale-95"
            aria-label="Следующий"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Индикаторы (точки) */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
