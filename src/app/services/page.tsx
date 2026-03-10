'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

type ClientType = 'all' | 'individual' | 'breeder' | 'shelter';
type ServiceType = 'all' | 'consultation' | 'second-opinion' | 'diagnostics' | 'dietology' | 'specialist' | 'chronic' | 'subscription';

const ITEMS_PER_PAGE = 9;

interface Service {
  id: string;
  name: string;
  clientType: 'individual' | 'breeder' | 'shelter';
  serviceType: ServiceType;
  shortDescription: string;
  fullDescription: string;
  price: string;
  priceValue: number;
  tags: string[];
  duration: string;
}

const services: Service[] = [
  // Частным лицам - консультации
  { id: 'primary-consult', name: 'Первичная консультация терапевта', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Сбор анамнеза, базовый осмотр по видео', fullDescription: 'Первичная консультация (до 30 мин)', price: '1 900 ₽', priceValue: 1900, tags: ['До 30 мин', 'Терапевт'], duration: 'до 30 мин' },
  { id: 'extended-consult', name: 'Расширенная консультация терапевта', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Сложные случаи, несколько заболеваний', fullDescription: 'Расширенная консультация (до 60 мин)', price: '2 500 ₽', priceValue: 2500, tags: ['До 60 мин', 'Сложные случаи'], duration: 'до 60 мин' },
  { id: 'emergency-consult', name: 'Экстренная консультация «Первое решение»', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Оценка неотложности, что делать сейчас', fullDescription: 'Экстренная консультация (до 30 мин)', price: '3 000 ₽', priceValue: 3000, tags: ['Экстренно'], duration: 'до 30 мин' },
  { id: 'repeat-consult', name: 'Повторная консультация по диагнозу', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Оценка динамики, корректировка (до 30 дней)', fullDescription: 'Повторная консультация', price: '1 200 ₽', priceValue: 1200, tags: ['Повторная'], duration: 'до 30 мин' },
  { id: 'puppy-kitten', name: 'Консультация по щенку/котёнку', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Вакцинация, питание, поведение', fullDescription: 'Консультация по щенку/котёнку', price: '1 400 ₽', priceValue: 1400, tags: ['Щенки/котята'], duration: 'до 40 мин' },
  { id: 'senior-pet', name: 'Консультация по пожилому животному', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Хронические заболевания, мониторинг', fullDescription: 'Консультация по пожилому животному', price: '1 800 ₽', priceValue: 1800, tags: ['Пожилое'], duration: 'до 40 мин' },
  { id: 'specialist-consult', name: 'Консультация узкого специалиста', clientType: 'individual', serviceType: 'specialist', shortDescription: 'Кардиолог, нефролог, гастроэнтеролог', fullDescription: 'Первичная консультация специалиста', price: '2 800 ₽', priceValue: 2800, tags: ['Узкий специалист'], duration: 'до 60 мин' },
  { id: 'specialist-repeat', name: 'Повторная консультация специалиста', clientType: 'individual', serviceType: 'specialist', shortDescription: 'Оценка динамики, корректировка', fullDescription: 'Повторная консультация специалиста', price: '1 800 ₽', priceValue: 1800, tags: ['Повторная'], duration: 'до 40 мин' },
  { id: 'dietitian', name: 'Консультация диетолога/нутрициолога', clientType: 'individual', serviceType: 'dietology', shortDescription: 'Подбор лечебного рациона', fullDescription: 'Первичная консультация диетолога', price: '2 200 ₽', priceValue: 2200, tags: ['Диетология'], duration: 'до 45 мин' },
  { id: 'dietitian-repeat', name: 'Повторная консультация диетолога', clientType: 'individual', serviceType: 'dietology', shortDescription: 'Коррекция рациона по результатам', fullDescription: 'Повторная консультация диетолога', price: '1 500 ₽', priceValue: 1500, tags: ['Повторная'], duration: 'до 30 мин' },
  { id: 'second-opinion', name: 'Второе мнение по диагнозу/лечению', clientType: 'individual', serviceType: 'second-opinion', shortDescription: 'Разбор выписок, альтернативные варианты', fullDescription: 'Услуга «Второе мнение»', price: '2 500 ₽', priceValue: 2500, tags: ['Второе мнение'], duration: 'до 60 мин' },
  { id: 'lab-analysis-basic', name: 'Базовый разбор анализов', clientType: 'individual', serviceType: 'diagnostics', shortDescription: 'ОАК, БАК, моча/кал или один блок', fullDescription: 'Базовый разбор анализов', price: '1 300 ₽', priceValue: 1300, tags: ['Анализы'], duration: 'письменно' },
  { id: 'lab-analysis-extended', name: 'Расширенный разбор анализов', clientType: 'individual', serviceType: 'diagnostics', shortDescription: 'Несколько анализов с планом', fullDescription: 'Расширенный разбор с планом', price: '1 900 ₽', priceValue: 1900, tags: ['Анализы'], duration: 'письменно' },
  { id: 'ultrasound-xray', name: 'Интерпретация УЗИ/рентген', clientType: 'individual', serviceType: 'diagnostics', shortDescription: 'Пересмотр протокола, комментарий', fullDescription: 'Дистанционная интерпретация', price: '2 200 ₽', priceValue: 2200, tags: ['УЗИ', 'Рентген'], duration: 'письменно' },
  { id: 'complex-case', name: 'Комплексный разбор случая', clientType: 'individual', serviceType: 'diagnostics', shortDescription: 'Анамнез, анализы, УЗИ/рентген', fullDescription: 'Комплексный разбор случая', price: '3 500 ₽', priceValue: 3500, tags: ['Комплексно'], duration: 'до 90 мин' },
  { id: 'chronic-plan', name: 'План ведения хронического пациента', clientType: 'individual', serviceType: 'chronic', shortDescription: 'Индивидуальный план для хронических заболеваний', fullDescription: 'Разработка плана ведения', price: '2 500 ₽', priceValue: 2500, tags: ['Хроника'], duration: 'письменно' },
  { id: 'chronic-correction', name: 'Коррекция схемы терапии', clientType: 'individual', serviceType: 'chronic', shortDescription: 'Онлайн-коррекция дозировок', fullDescription: 'Коррекция по анализам', price: '800 ₽', priceValue: 800, tags: ['Хроника'], duration: 'онлайн' },
  { id: 'postop-control', name: 'Постоперационный контроль', clientType: 'individual', serviceType: 'chronic', shortDescription: 'Осмотр швов, оценка боли (до 20 мин)', fullDescription: 'Постоперационный контроль', price: '900 ₽', priceValue: 900, tags: ['После операции'], duration: 'до 20 мин' },
  { id: 'postop-package', name: 'Пакет «После операции»', clientType: 'individual', serviceType: 'subscription', shortDescription: 'До 4 контактов в течение 10 дней', fullDescription: 'Пакет после операции', price: '2 300 ₽', priceValue: 2300, tags: ['Пакет'], duration: '10 дней' },
  { id: 'pre-purchase', name: 'Консультация перед покупкой', clientType: 'individual', serviceType: 'consultation', shortDescription: 'Выбор породы, оценка рисков', fullDescription: 'Предварительная консультация', price: '2 300 ₽', priceValue: 2300, tags: ['Покупка'], duration: 'до 60 мин' },
  // Подписки
  { id: 'monthly-subscription', name: 'Подписка «Онлайн-сопровождение»', clientType: 'individual', serviceType: 'subscription', shortDescription: 'До 3 консультаций в месяц + чат', fullDescription: 'До 3 консультаций + чат', price: '5 500 ₽', priceValue: 5500, tags: ['Подписка'], duration: 'месяц' },
  { id: 'subscription-plus', name: 'Подписка «Онлайн-сопровождение+»', clientType: 'individual', serviceType: 'subscription', shortDescription: 'До 5 консультаций + разбор анализов', fullDescription: 'До 5 консультаций + разбор', price: '8 000 ₽', priceValue: 8000, tags: ['Подписка'], duration: 'месяц' },
  { id: 'family-subscription', name: 'Подписка «Семейная»', clientType: 'individual', serviceType: 'subscription', shortDescription: 'До 4 консультаций для семьи', fullDescription: 'До 4 консультаций (до 3 питомцев)', price: '8 500 ₽', priceValue: 8500, tags: ['Семья'], duration: 'месяц' },
  { id: 'chronic-subscription', name: 'Подписка «Хронический пациент»', clientType: 'individual', serviceType: 'subscription', shortDescription: 'Ведение одного хронического случая', fullDescription: 'До 2 консультаций + коррекции', price: '7 000 ₽', priceValue: 7000, tags: ['Хроника'], duration: 'месяц' },
  // Заводчики
  { id: 'breeder-package', name: 'Подписка «Для заводчиков/питомников»', clientType: 'breeder', serviceType: 'subscription', shortDescription: 'До 6 консультаций + чат + сессия', fullDescription: 'До 6 консультаций в месяц', price: '12 000 ₽', priceValue: 12000, tags: ['Заводчики'], duration: 'месяц' },
  // Приюты
  { id: 'shelter-consult', name: 'Консультация для волонтёров', clientType: 'shelter', serviceType: 'consultation', shortDescription: 'Разбор ситуации (до 40 мин)', fullDescription: 'Разбор ситуации с подобранным', price: '1 300 ₽', priceValue: 1300, tags: ['Волонтёры'], duration: 'до 40 мин' },
  { id: 'shelter-repeat', name: 'Повторная для волонтёров', clientType: 'shelter', serviceType: 'consultation', shortDescription: 'Оценка динамики (до 30 мин)', fullDescription: 'Повторная консультация', price: '900 ₽', priceValue: 900, tags: ['Волонтёры'], duration: 'до 30 мин' },
  { id: 'volunteer-subscription', name: 'Подписка «Волонтёр»', clientType: 'shelter', serviceType: 'subscription', shortDescription: 'До 3 консультаций по 3 подопечным', fullDescription: 'До 3 консультаций + чат', price: '3 500 ₽', priceValue: 3500, tags: ['Волонтёры'], duration: 'месяц' },
];

const clientTypeLabels: Record<ClientType, string> = {
  'all': 'Все',
  'individual': 'Частным лицам',
  'breeder': 'Заводчикам',
  'shelter': 'Приютам',
};

const serviceTypeLabels: Record<ServiceType, string> = {
  'all': 'Все услуги',
  'consultation': 'Консультации',
  'second-opinion': 'Второе мнение',
  'diagnostics': 'Диагностика',
  'dietology': 'Диетология',
  'specialist': 'Специалисты',
  'chronic': 'Хроника',
  'subscription': 'Подписки',
};

const clientColors = {
  individual: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', btn: 'from-blue-500 to-cyan-500' },
  breeder: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', btn: 'from-orange-500 to-amber-500' },
  shelter: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', btn: 'from-emerald-500 to-teal-500' },
};

export default function ServicesPricesPage() {
  const [clientType, setClientType] = useState<ClientType>('all');
  const [serviceType, setServiceType] = useState<ServiceType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      if (clientType !== 'all' && service.clientType !== clientType) return false;
      if (serviceType !== 'all' && service.serviceType !== serviceType) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return service.name.toLowerCase().includes(q) || service.shortDescription.toLowerCase().includes(q);
      }
      return true;
    });
  }, [clientType, serviceType, searchQuery]);

  // Пагинация
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredServices.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredServices, currentPage]);

  const clearFilters = () => {
    setClientType('all');
    setServiceType('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Услуги и цены</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">Полный прайс-лист ветеринарных услуг OnlyVet</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/documents/pricelist.docx" download className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl transition-all duration-300 text-lg" style={{ color: '#FFFFFF' }}>📄 Скачать полный прайс</a>
                <Link href="/booking" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light transition-all duration-300 text-lg">📝 Записаться</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Компактные фильтры */}
      <section className="py-3 bg-white border-b border-gray-200 sticky top-[80px] md:top-[84px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          {/* Мобильная и планшетная версия - 2 строки со скроллом */}
          <div className="sm:hidden">
            {/* Клиенты - горизонтальный скролл */}
            <div className="mb-3 overflow-x-auto overflow-y-hidden -mx-1 px-1">
              <div className="flex gap-2 whitespace-nowrap pb-1">
                {(['all', 'individual', 'breeder', 'shelter'] as ClientType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setClientType(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
                      clientType === type
                        ? type === 'all' ? 'bg-gray-800 text-white' : type === 'individual' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : type === 'breeder' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'all' ? '📋 Все' : type === 'individual' ? '👤 Частным' : type === 'breeder' ? '🏆 Заводчикам' : '🤝 Приютам'}
                  </button>
                ))}
              </div>
            </div>

            {/* Услуги + Сброс */}
            <div className="flex items-center gap-2">
              <div className="flex-1 overflow-x-auto overflow-y-hidden -mx-1 px-1">
                <div className="flex gap-1.5 whitespace-nowrap pb-1">
                  {(['all', 'consultation', 'diagnostics', 'specialist', 'subscription'] as ServiceType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setServiceType(type)}
                      className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all flex-shrink-0 ${
                        serviceType === type ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {serviceTypeLabels[type]}
                    </button>
                  ))}
                </div>
              </div>
              {(clientType !== 'all' || serviceType !== 'all' || searchQuery.trim()) && (
                <button onClick={clearFilters} className="px-2.5 py-1.5 text-xs text-primary hover:text-primary-dark font-medium flex-shrink-0">✕</button>
              )}
            </div>
          </div>

          {/* Десктопная версия (sm и выше) - 2 строки */}
          <div className="hidden sm:block">
            {/* 1 строка - Клиенты */}
            <div className="flex flex-wrap gap-2 mb-3">
              {(['all', 'individual', 'breeder', 'shelter'] as ClientType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setClientType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    clientType === type
                      ? type === 'all' ? 'bg-gray-800 text-white' : type === 'individual' ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : type === 'breeder' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type === 'all' ? '📋 Все' : type === 'individual' ? '👤 Частным' : type === 'breeder' ? '🏆 Заводчикам' : '🤝 Приютам'}
                </button>
              ))}
            </div>

            {/* 2 строка - Услуги + Поиск + Сброс + Найдено */}
            <div className="flex items-center gap-3">
              <div className="flex flex-wrap gap-1.5 flex-1">
                {(['all', 'consultation', 'diagnostics', 'specialist', 'subscription'] as ServiceType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setServiceType(type)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      serviceType === type ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {serviceTypeLabels[type]}
                  </button>
                ))}
              </div>
              <div className="relative w-48 lg:w-64">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Поиск услуг..." className="w-full px-3 py-1.5 pl-9 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary text-sm outline-none" />
                <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              {(clientType !== 'all' || serviceType !== 'all' || searchQuery.trim()) && (
                <button onClick={clearFilters} className="px-3 py-1.5 text-xs text-primary hover:text-primary-dark font-medium">✕ Сброс</button>
              )}
              <div className="text-xs text-gray-500 whitespace-nowrap">
                Найдено: <span className="font-bold text-gray-900">{filteredServices.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedServices.map((service) => {
                  const colors = clientColors[service.clientType];
                  return (
                    <FadeIn key={service.id}>
                      <div className={`${colors.bg} rounded-2xl p-5 border-2 ${colors.border} hover:shadow-xl transition-all h-full flex flex-col`}>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${colors.badge}`}>{clientTypeLabels[service.clientType]}</span>
                            <span className="text-xs text-gray-500">⏱ {service.duration}</span>
                          </div>
                          <h3 className="text-base font-bold text-gray-900 mb-2">{service.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{service.shortDescription}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {service.tags.map((tag) => (<span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/70 text-gray-700">{tag}</span>))}
                          </div>
                        </div>
                        <div className={`border-t-2 ${colors.border} pt-3 mt-auto space-y-2`}>
                          <p className="text-xl font-bold text-gray-900">{service.price}</p>
                          <div className="flex gap-2">
                            <Link href={`/booking?serviceId=${service.id}`} className={`flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r ${colors.btn} text-white rounded-lg hover:shadow-md transition-all text-sm font-semibold`} style={{ color: '#FFFFFF' }}>Записаться</Link>
                            <Link href={`/services/${service.id}`} className="px-3 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary-light transition-all text-sm font-semibold">Подробнее</Link>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>

              {/* Пагинация */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
                  >
                    ← Назад
                  </button>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-medium transition-all ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'border border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
                  >
                    Вперёд →
                  </button>
                </div>
              )}
              <p className="text-center text-sm text-gray-500 mt-4">
                Показано {paginatedServices.length} из {filteredServices.length} услуг
              </p>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Услуги не найдены</h3>
              <button onClick={clearFilters} className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark font-semibold">Сбросить фильтры</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Остались вопросы?</h2>
            <p className="text-lg text-gray-600 mb-8">Напишите нам, и мы поможем подобрать оптимальный формат консультации</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg" style={{ color: '#FFFFFF' }}>Записаться на консультацию</Link>
              <a href="mailto:consult@onlyvet.ru" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg">Написать нам</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
