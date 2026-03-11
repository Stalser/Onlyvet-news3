'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import PhoneModal from '@/components/PhoneModal';

const mainNavLinks = [
  { href: '/services', label: 'Услуги и цены' },
  { href: '/doctors', label: 'Врачи' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/blog', label: 'Блог' },
];

const setupLink = { href: '/setup', label: 'Как подключиться' };

const dropdownLinks = [
  { href: '/how-it-works', label: 'Как это работает' },
  { href: '/safety', label: 'Безопасность' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'О сервисе' },
  { href: '/documents', label: 'Документы' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-md shadow-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="OnlyVet"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Навигация для десктопа */}
            <nav className="hidden lg:flex items-center space-x-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary-light/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* Кнопка "Как подключиться" — выделена */}
              <Link
                href={setupLink.href}
                className="header-setup-btn ml-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 inline-block"
              >
                {setupLink.label}
              </Link>

              {/* Выпадающее меню */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary-light/50 rounded-lg transition-all duration-200 font-medium"
                >
                  Ещё
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-scale-in origin-top-right">
                      {dropdownLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2.5 text-gray-700 hover:text-primary hover:bg-primary-light/50 transition-all duration-200"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Поиск */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-primary hover:bg-primary-light/50 rounded-lg transition-all duration-200"
                aria-label="Поиск"
              >
                <Icon icon="mdi:magnify" className="w-5 h-5" />
              </button>
            </nav>

            {/* Кнопка записи и телефон */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsPhoneModalOpen(true)}
                className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-xl hover:bg-green-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                title="Позвонить в регистратуру"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
              </button>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                style={{ color: '#FFFFFF' }}
              >
                Записаться на консультацию
              </Link>
            </div>

            {/* Кнопка мобильного меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
              aria-label="Меню"
            >
              <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} className="w-6 h-6" />
            </button>
          </div>

          {/* Поиск для десктопа */}
          {isSearchOpen && (
            <div className="hidden lg:block py-4 border-t border-gray-100">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск по сайту (например: анализы, онкология, консультация)"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all font-medium"
                >
                  Найти
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="px-4 py-3 text-gray-500 hover:text-gray-700"
                >
                  <Icon icon="mdi:close" className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Модальное окно телефона */}
        <PhoneModal
          isOpen={isPhoneModalOpen}
          onClose={() => setIsPhoneModalOpen(false)}
          phoneNumber={process.env.NEXT_PUBLIC_PHONE_TEL || '+79000000000'}
          displayNumber={process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+7 900 000-00-00'}
        />
      </header>

      {/* Мобильное меню — вне header */}
      {isMenuOpen && (
        <>
          {/* Затемнение фона */}
          <div
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Выезжающее меню */}
          <nav className="fixed inset-0 bg-white z-[70] lg:hidden overflow-y-auto animate-slide-down">
            {/* Кнопка закрытия */}
            <div className="sticky top-0 bg-white flex items-center justify-between p-4 border-b border-gray-100">
              <span className="text-lg font-bold text-gray-900">Меню</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                aria-label="Закрыть меню"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col p-4 space-y-2 pb-8">
              {/* Кнопка телефона */}
              <button
                onClick={() => {
                  setIsPhoneModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all font-medium shadow-md"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Позвонить в регистратуру
              </button>

              {/* Поиск */}
              <form onSubmit={handleSearch} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск по сайту"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark transition-all"
                >
                  <Icon icon="mdi:magnify" className="w-5 h-5" />
                </button>
              </form>

              {/* Основное меню */}
              <div className="space-y-1">
                {mainNavLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary-light/50 rounded-xl transition-all font-medium animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Кнопка "Как подключиться" — выделена */}
              <div className="py-3">
                <Link
                  href={setupLink.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="header-setup-btn w-full text-center px-4 py-4 rounded-xl shadow-lg transition-all animate-fade-in-up block font-bold"
                  style={{ animationDelay: `${mainNavLinks.length * 50}ms` }}
                >
                  {setupLink.label}
                </Link>
              </div>

              {/* Разделитель */}
              <div className="border-t border-gray-200 my-2" />

              {/* Дополнительное меню */}
              <div className="space-y-1">
                <p className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider font-semibold">Дополнительно</p>
                {dropdownLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary-light/50 rounded-xl transition-all font-medium animate-fade-in-up"
                    style={{ animationDelay: `${(index + mainNavLinks.length) * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Кнопка записи */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="header-booking-btn block w-full text-center px-6 py-4 rounded-xl shadow-lg transition-all font-medium text-lg"
                >
                  Записаться на консультацию
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
