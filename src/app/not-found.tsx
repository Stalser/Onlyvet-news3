'use client';

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light/30 flex items-center justify-center px-4">
      <FadeIn>
        <div className="text-center max-w-2xl">
          {/* Заголовок 404 */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-2">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ой!</h2>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Похоже, вы перешли по ссылке, которая больше не существует или была перемещена.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
              style={{ color: '#FFFFFF' }}
            >
              На главную
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
            >
              Услуги и цены
            </Link>
          </div>

          {/* Полезные ссылки */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Возможно, вы искали:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/services" className="text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-light hover:text-primary transition-all">
                Услуги и цены
              </Link>
              <Link href="/doctors" className="text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-light hover:text-primary transition-all">
                Наши врачи
              </Link>
              <Link href="/booking" className="text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-light hover:text-primary transition-all">
                Записаться на консультацию
              </Link>
              <Link href="/reviews" className="text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-light hover:text-primary transition-all">
                Отзывы владельцев
              </Link>
              <Link href="/documents/terms" className="text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-light hover:text-primary transition-all">
                Документы
              </Link>
              <Link href="/faq" className="text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-primary-light hover:text-primary transition-all">
                Часто задаваемые вопросы
              </Link>
            </div>
          </div>

          {/* Контакты помощи */}
          <div className="mt-8 text-sm text-gray-500">
            <p>Нужна помощь? Напишите нам:</p>
            <a href="mailto:consult@onlyvet.ru" className="text-primary hover:underline font-medium">
              consult@onlyvet.ru
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
