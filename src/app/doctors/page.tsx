'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';
import Carousel from '@/components/Carousel';
import { doctors } from '@/data/doctors';

type Specialization = 'все' | 'эксперт' | 'терапия' | 'диагностика' | 'онкология';

const specializationLabels: Record<Specialization, string> = {
  'все': 'Все врачи',
  'эксперт': 'Эксперты',
  'терапия': 'Терапевты',
  'диагностика': 'Диагносты',
  'онкология': 'Онкологи',
};

// Фильтр только для врачей, которые есть в базе
const availableSpecializations: Specialization[] = ['все', 'эксперт', 'терапия', 'диагностика', 'онкология'];

export default function DoctorsPage() {
  const [selectedSpecialization, setSelectedSpecialization] = useState<Specialization>('все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      if (selectedSpecialization !== 'все' && doctor.specialization !== selectedSpecialization) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          doctor.name.toLowerCase().includes(query) ||
          doctor.role.toLowerCase().includes(query) ||
          doctor.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          doctor.servicesShort.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedSpecialization, searchQuery]);

  const clearFilters = () => {
    setSelectedSpecialization('все');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedSpecialization !== 'все' || searchQuery.trim();

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
                    Наши врачи
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Our Team</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Опытные{' '}
                <span className="text-primary">ветеринарные специалисты</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Квалифицированные врачи с экспертизой в различных областях. 
                Каждый специалист готов помочь вашему питомцу получить качественную медицинскую помощь.
              </p>
            </FadeIn>

            {/* Статистика */}
            <FadeIn delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{doctors.length}</div>
                  <div className="text-sm text-gray-600 font-medium">Врача в команде</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1500+</div>
                  <div className="text-sm text-gray-600 font-medium">Консультаций</div>
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
                  Записаться к врачу
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
      <section className="py-3 bg-white border-b border-gray-200 sticky top-[80px] md:top-[84px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Мобильная версия - горизонтальный скролл */}
          <div className="sm:hidden">
            {/* Специализации - горизонтальный скролл */}
            <div className="overflow-x-auto overflow-y-hidden -mx-1 px-1">
              <div className="flex gap-2 whitespace-nowrap pb-1">
                {availableSpecializations.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialization(spec)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                      selectedSpecialization === spec
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {specializationLabels[spec]}
                  </button>
                ))}
              </div>
            </div>

            {/* Поиск + Сброс */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск врача..."
                  className="w-full px-3 py-1.5 pl-9 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary text-sm outline-none"
                />
                <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="px-2.5 py-1.5 text-xs text-primary hover:text-primary-dark font-medium flex-shrink-0">✕</button>
              )}
            </div>
          </div>

          {/* Десктопная версия (sm и выше) */}
          <div className="hidden sm:block">
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Поиск */}
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Поиск врача (например: онкология, терапия, Андрей)"
                      className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                {/* Специализации */}
                <div className="flex flex-wrap gap-2">
                  {availableSpecializations.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialization(spec)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        selectedSpecialization === spec
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {specializationLabels[spec]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Результат и сброс */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Найдено врачей: <span className="font-semibold text-gray-900">{filteredDoctors.length}</span>
                  {hasActiveFilters && (
                    <span className="ml-2">из <span className="font-semibold">{doctors.length}</span></span>
                  )}
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-dark font-semibold"
                  >
                    ✕ Сбросить фильтры
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Список врачей - карусель */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length > 0 ? (
            <Carousel itemsPerPage={3} autoPlay autoPlayInterval={7000}>
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-primary-light hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Фото врача */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-light to-secondary-light overflow-hidden">
                    {doctor.imageUrl ? (
                      <Image
                        src={doctor.imageUrl}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-8xl font-bold text-white opacity-30">{doctor.initials}</span>
                      </div>
                    )}
                    {/* Бейдж специализации */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary shadow-lg">
                        {specializationLabels[doctor.specialization]}
                      </span>
                    </div>
                  </div>

                  {/* Информация */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 font-medium">
                      {doctor.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                      {doctor.servicesShort}
                    </p>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {doctor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded bg-primary-light text-primary font-medium whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Статистика */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{doctor.patientsCount}</div>
                        <div className="text-xs text-gray-500">Пациентов</div>
                      </div>
                      <div className="h-8 w-px bg-gray-200" />
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{doctor.reviewsCount}</div>
                        <div className="text-xs text-gray-500">Отзывов</div>
                      </div>
                      <div className="h-8 w-px bg-gray-200" />
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">★ 5.0</div>
                        <div className="text-xs text-gray-500">Рейтинг</div>
                      </div>
                    </div>

                    {/* Опыт */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium">{doctor.experienceLabel}</span>
                    </div>

                    {/* Кнопки */}
                    <div className="flex gap-2 mt-auto">
                      <Link
                        href={`/booking?doctorId=${doctor.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors text-sm font-semibold"
                        style={{ color: '#FFFFFF' }}
                      >
                        Записаться
                      </Link>
                      <Link
                        href={`/doctors/${doctor.id}`}
                        className="px-4 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary-light transition-colors text-sm font-semibold"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Врачи не найдены</h3>
              <p className="text-gray-600 mb-6">Попробуйте изменить параметры поиска или фильтры</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-semibold"
                style={{ color: '#FFFFFF' }}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Почему нам доверяют */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Почему нам доверяют
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScaleIn delay={0}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Квалифицированные врачи</h3>
                <p className="text-gray-600 text-sm">
                  Все специалисты имеют высшее ветеринарное образование и регулярно повышают квалификацию
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={100}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Доказательная медицина</h3>
                <p className="text-gray-600 text-sm">
                  Рекомендации основаны на современных научных данных и международных протоколах
                </p>
              </div>
            </ScaleIn>
            <ScaleIn delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Индивидуальный подход</h3>
                <p className="text-gray-600 text-sm">
                  Каждый случай рассматривается подробно, с учётом всех особенностей пациента
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы записаться к врачу?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Выберите специалиста и оставьте заявку на консультацию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Записаться на консультацию
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
              >
                Посмотреть услуги
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
