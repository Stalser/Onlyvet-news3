'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';

type DocCategory = 'все' | 'основные' | 'медицинские' | 'дополнительно';

const documents = [
  {
    category: 'основные',
    title: 'Пользовательское соглашение',
    description: 'Правила использования сервиса OnlyVet, права и обязанности сторон',
    icon: '📄',
    href: '/documents/terms',
    download: '/documents/terms.pdf',
    format: 'PDF',
    size: '245 КБ',
  },
  {
    category: 'основные',
    title: 'Политика конфиденциальности',
    description: 'Как мы собираем, храним и защищаем ваши персональные данные',
    icon: '🔒',
    href: '/documents/privacy',
    download: '/documents/privacy.pdf',
    format: 'PDF',
    size: '198 КБ',
  },
  {
    category: 'основные',
    title: 'Правила оплаты и возврата',
    description: 'Условия оплаты услуг, порядок возврата средств',
    icon: '💳',
    href: '/documents/refund',
    download: '/documents/refund.pdf',
    format: 'PDF',
    size: '156 КБ',
  },
  {
    category: 'медицинские',
    title: 'Согласие на дистанционную консультацию',
    description: 'Информированное согласие на получение ветеринарных услуг онлайн',
    icon: '✍️',
    href: '/documents/consent',
    download: '/documents/consent.pdf',
    format: 'PDF',
    size: '187 КБ',
  },
  {
    category: 'медицинские',
    title: 'Дисклеймер',
    description: 'Важная информация об ограничениях онлайн-формата',
    icon: '⚠️',
    href: '/documents/disclaimer',
    download: '/documents/disclaimer.pdf',
    format: 'PDF',
    size: '134 КБ',
  },
  {
    category: 'дополнительно',
    title: 'Политика использования cookies',
    description: 'Информация об использовании файлов cookie на сайте',
    icon: '🍪',
    href: '/documents/cookies',
    download: '/documents/cookies.pdf',
    format: 'PDF',
    size: '112 КБ',
  },
  {
    category: 'дополнительно',
    title: 'Правила использования сайта',
    description: 'Правила и рекомендации по работе с сайтом',
    icon: '📋',
    href: '/documents/site-rules',
    download: '/documents/site-rules.pdf',
    format: 'PDF',
    size: '145 КБ',
  },
];

const categoryLabels: Record<DocCategory, string> = {
  'все': 'Все документы',
  'основные': 'Основные',
  'медицинские': 'Медицинские',
  'дополнительно': 'Дополнительно',
};

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      if (selectedCategory !== 'все' && doc.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          doc.title.toLowerCase().includes(query) ||
          doc.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('все');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'все' || searchQuery.trim();

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
                    Документы
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Legal Documents</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Юридическая информация и{' '}
                <span className="text-primary">документы сервиса</span>
              </h2>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Рекомендуем ознакомиться перед записью на консультацию
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="mr-2">📝</span>
                  Записаться на консультацию
                </Link>
                <a
                  href="mailto:consult@onlyvet.ru"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">✉️</span>
                  Написать нам
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-3 bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-[80px] sm:top-[84px] z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Поиск */}
          <div className="mb-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск документов..."
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-9 sm:pl-10 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
              />
              <svg className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Категории */}
          <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden -mx-1 px-1 pb-1">
            {(Object.keys(categoryLabels) as DocCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-2 text-xs text-primary hover:text-primary-dark font-semibold hover:underline whitespace-nowrap flex-shrink-0"
              >
                Сбросить
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Список документов */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => (
                <FadeIn key={doc.href} delay={index * 100}>
                  <div className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-primary-light hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{doc.icon}</div>
                      <a
                        href={doc.download}
                        download
                        className="p-2 text-gray-400 hover:text-primary hover:bg-primary-light rounded-lg transition-all duration-200"
                        title="Скачать PDF"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {doc.format} · {doc.size}
                      </span>
                      <div className="flex items-center gap-2">
                        <Link
                          href={doc.href}
                          className="text-primary hover:text-primary-dark font-semibold text-sm"
                        >
                          Читать
                        </Link>
                        <span className="text-gray-300">|</span>
                        <a
                          href={doc.download}
                          download
                          className="text-gray-500 hover:text-primary font-semibold text-sm flex items-center gap-1"
                        >
                          <span>📕</span>
                          Скачать
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Документы не найдены</h3>
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

      {/* Важная информация */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-primary-light p-8 rounded-3xl border border-primary-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Важная информация
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Перед записью на консультацию пожалуйста ознакомьтесь с документами выше. 
                  Особенно важно прочитать <strong>дисклеймер</strong> и <strong>согласие на дистанционную консультацию</strong>.
                </p>
                <p>
                  Запись на консультацию означает автоматическое согласие с условиями 
                  <Link href="/documents/terms" className="text-primary hover:underline ml-1">
                    пользовательского соглашения
                  </Link>.
                </p>
                <div className="bg-white border-l-4 border-primary p-4 rounded-r-lg mt-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Обратите внимание:</span> Онлайн-консультация 
                    не заменяет очный приём ветеринарного врача. В экстренных случаях немедленно 
                    обращайтесь в ближайшую клинику.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Остались вопросы?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Если у вас возникли вопросы по документам или условиям работы сервиса, напишите нам
            </p>
            <a
              href="mailto:consult@onlyvet.ru"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              Написать нам
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
