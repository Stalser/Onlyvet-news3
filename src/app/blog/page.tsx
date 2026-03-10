'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const blogPosts = [
  {
    slug: 'vaccination-schedule',
    title: 'График вакцинации щенков и котят',
    excerpt: 'Полный календарь прививок для молодых животных. Какие вакцины нужны и когда их делать.',
    date: '5 марта 2026',
    readTime: '5 мин',
    category: 'Профилактика',
    image: '💉',
  },
  {
    slug: 'signs-of-illness',
    title: '10 признаков болезни у кошек',
    excerpt: 'Как понять, что ваш питомец заболел. Ранние симптомы, которые нельзя игнорировать.',
    date: '3 марта 2026',
    readTime: '7 мин',
    category: 'Здоровье',
    image: '🐱',
  },
  {
    slug: 'dog-nutrition',
    title: 'Правильное питание для собак',
    excerpt: 'Основы сбалансированного рациона. Сухой корм или натуралка — что выбрать?',
    date: '1 марта 2026',
    readTime: '6 мин',
    category: 'Питание',
    image: '🐕',
  },
  {
    slug: 'parasite-prevention',
    title: 'Защита от паразитов',
    excerpt: 'Дегельминтизация и обработка от блох. Как часто и какими препаратами.',
    date: '28 февраля 2026',
    readTime: '4 мин',
    category: 'Профилактика',
    image: '🛡️',
  },
  {
    slug: 'senior-pet-care',
    title: 'Уход за пожилым животным',
    excerpt: 'Особенности содержания возрастных питомцев. На что обратить внимание.',
    date: '25 февраля 2026',
    readTime: '8 мин',
    category: 'Уход',
    image: '🧓',
  },
  {
    slug: 'emergency-signs',
    title: 'Когда нужна срочная помощь?',
    excerpt: 'Симптомы, при которых нужно немедленно обращаться к ветеринару.',
    date: '22 февраля 2026',
    readTime: '5 мин',
    category: 'Экстренно',
    image: '🚨',
  },
];

const categories = [
  { name: 'Все', color: 'gray', icon: '📋' },
  { name: 'Профилактика', color: 'blue', icon: '💉' },
  { name: 'Здоровье', color: 'green', icon: '❤️' },
  { name: 'Питание', color: 'orange', icon: '🍖' },
  { name: 'Уход', color: 'purple', icon: '🛁' },
  { name: 'Экстренно', color: 'red', icon: '🚨' },
];

const categoryColors: Record<string, { bg: string; text: string; active: string }> = {
  Все: { bg: 'bg-gray-100', text: 'text-gray-700', active: 'bg-gray-800' },
  Профилактика: { bg: 'bg-blue-50', text: 'text-blue-700', active: 'bg-blue-500' },
  Здоровье: { bg: 'bg-green-50', text: 'text-green-700', active: 'bg-green-500' },
  Питание: { bg: 'bg-orange-50', text: 'text-orange-700', active: 'bg-orange-500' },
  Уход: { bg: 'bg-purple-50', text: 'text-purple-700', active: 'bg-purple-500' },
  Экстренно: { bg: 'bg-red-50', text: 'text-red-700', active: 'bg-red-500' },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'Все' || post.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory('Все');
    setSearchQuery('');
  };

  const hasActiveFilters = activeCategory !== 'Все' || searchQuery.trim() !== '';

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Блог</span>
              </h1>
              <p className="text-lg text-gray-600">Статьи о здоровье ваших питомцев</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Фильтры и поиск - компактная версия */}
      <section className="py-3 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Категории */}
            <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-300 flex items-center gap-1.5 ${
                    activeCategory === cat.name
                      ? `${categoryColors[cat.name].active} text-white shadow-md scale-105`
                      : `${categoryColors[cat.name].bg} ${categoryColors[cat.name].text} hover:opacity-80`
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.name}</span>
                  <span className="sm:hidden">{cat.name.slice(0, 3)}.</span>
                </button>
              ))}
            </div>

            {/* Поиск */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск..."
                  className="w-full sm:w-48 px-3 py-1.5 pl-9 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent text-sm outline-none transition-all"
                />
                <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="p-1.5 text-gray-500 hover:text-red-500 transition-colors"
                  title="Сбросить фильтры"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          {/* Результат */}
          <div className="mt-2 text-xs text-gray-500">
            Найдено: <span className="font-bold text-gray-900">{filteredPosts.length}</span> из {blogPosts.length}
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 50}>
                  <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                    {/* Иконка статьи */}
                    <div className={`h-40 flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110 ${
                      post.category === 'Профилактика' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                      post.category === 'Здоровье' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                      post.category === 'Питание' ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                      post.category === 'Уход' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                      'bg-gradient-to-br from-red-400 to-red-600'
                    }`}>
                      <span className="filter drop-shadow-lg">{post.image}</span>
                    </div>
                    
                    {/* Контент */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                          post.category === 'Профилактика' ? 'bg-blue-100 text-blue-700' :
                          post.category === 'Здоровье' ? 'bg-green-100 text-green-700' :
                          post.category === 'Питание' ? 'bg-orange-100 text-orange-700' :
                          post.category === 'Уход' ? 'bg-purple-100 text-purple-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-lg font-bold text-gray-900 mb-2 flex-1 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-primary hover:text-primary-dark font-semibold text-xs flex items-center gap-1"
                        >
                          Читать →
                        </Link>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Статьи не найдены</h3>
              <p className="text-gray-600 text-sm mb-4">Попробуйте изменить параметры поиска</p>
              <button
                onClick={clearFilters}
                className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold"
                style={{ color: '#FFFFFF' }}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Остались вопросы?
            </h2>
            <p className="text-gray-600 mb-6">
              Запишитесь на консультацию — наши ветеринары ответят на все вопросы
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
              style={{ color: '#FFFFFF' }}
            >
              Записаться на консультацию
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
