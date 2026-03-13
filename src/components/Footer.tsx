import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  services: [
    { href: '/services', label: 'Услуги и цены', id: 'service-all' },
    { href: '/services#диагностика', label: 'Диагностика', id: 'service-diagnosis' },
    { href: '/services#консультация', label: 'Консультации', id: 'service-consult' },
    { href: '/booking', label: 'Записаться', id: 'service-booking' },
  ],
  info: [
    { href: '/how-it-works', label: 'Как это работает', id: 'info-how' },
    { href: '/safety', label: 'Безопасность', id: 'info-safety' },
    { href: '/faq', label: 'FAQ', id: 'info-faq' },
    { href: '/about', label: 'О сервисе', id: 'info-about' },
  ],
  legal: [
    { href: '/documents', label: 'Документы', id: 'legal-docs' },
    { href: '/documents/privacy', label: 'Политика конфиденциальности', id: 'legal-privacy' },
    { href: '/documents/terms', label: 'Пользовательское соглашение', id: 'legal-terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Мобильная версия - компактная */}
        <div className="lg:hidden">
          {/* Логотип и соцсети */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="group">
              <Image
                src="/images/logo.svg"
                alt="OnlyVet"
                width={40}
                height={40}
                className="h-10 w-auto group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="flex gap-2">
              <a href="https://vk.com/onlyvet_clinic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-light transition-all">
                <Image src="/images/svg/vk-logo2.svg" alt="VK" width={18} height={18} className="w-7 h-7" />
              </a>
              <a href="https://t.me/onlyvet_clinic" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-light transition-all">
                <Image src="/images/svg/telegram-logo2.svg" alt="Telegram" width={18} height={18} className="w-7 h-7" />
              </a>
              <a href="https://ok.ru/onlyvet" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-light transition-all">
                <Image src="/images/svg/ok-sign-logo2.svg" alt="OK" width={18} height={18} className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Контакты - компактно */}
          <div className="flex flex-wrap gap-3 mb-6 text-xs">
            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || '+79000000000'}`} className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors">
              <Image src="/images/svg/phone-icon.svg" alt="Phone" width={16} height={16} className="w-4 h-4" />
              <span className="font-medium">{process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+7 900 000-00-00'}</span>
            </a>
            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'consult@onlyvet.ru'}`} className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors">
              <Image src="/images/svg/email-icon.svg" alt="Email" width={16} height={16} className="w-4 h-4" />
              <span className="font-medium">Email</span>
            </a>
          </div>

          {/* Ссылки - 2 колонки */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Услуги</h3>
              <ul className="space-y-2">
                {footerLinks.services.slice(0, 3).map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary text-xs transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Инфо</h3>
              <ul className="space-y-2">
                {footerLinks.info.slice(0, 3).map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary text-xs transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Документы - отдельно */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">Документы</h3>
            <div className="flex flex-wrap gap-2">
              {footerLinks.legal.map((link) => (
                <Link key={link.id} href={link.href} className="text-xs text-gray-600 hover:text-primary px-2 py-1 bg-white rounded border border-gray-200 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Нижняя строка */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-500 text-xs mb-2">
              © {new Date().getFullYear()} OnlyVet
            </p>
            <p className="text-gray-400 text-xs">
              Онлайн-консультация не заменяет очный приём
            </p>
          </div>
        </div>

        {/* Десктопная версия - полная */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Логотип и описание */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4 group">
                <Image
                  src="/images/logo.svg"
                  alt="OnlyVet"
                  width={48}
                  height={48}
                  className="h-12 w-auto group-hover:opacity-80 transition-opacity"
                  priority
                />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Профессиональные онлайн-консультации ветеринарного врача для кошек и собак
              </p>

              {/* Контакты */}
              <div className="space-y-2">
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'consult@onlyvet.ru'}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <Image src="/images/svg/email-icon.svg" alt="Email" width={20} height={20} className="w-5 h-5" />
                  {process.env.NEXT_PUBLIC_EMAIL || 'consult@onlyvet.ru'}
                </a>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || '+79000000000'}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
                  <Image src="/images/svg/phone-icon.svg" alt="Phone" width={20} height={20} className="w-5 h-5" />
                  {process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+7 900 000-00-00'}
                </a>
              </div>

              {/* Соцсети */}
              <div className="flex gap-3 mt-6">
                <a href="https://vk.com/onlyvet_clinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Image src="/images/svg/vk-logo2.svg" alt="VK" width={20} height={20} className="w-8 h-8" />
                </a>
                <a href="https://t.me/onlyvet_clinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Image src="/images/svg/telegram-logo2.svg" alt="Telegram" width={20} height={20} className="w-8 h-8" />
                </a>
                <a href="https://ok.ru/onlyvet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Image src="/images/svg/ok-sign-logo2.svg" alt="OK" width={20} height={20} className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Услуги */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Услуги</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Информация */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Информация</h3>
              <ul className="space-y-2">
                {footerLinks.info.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Документы */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Документы</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Нижняя строка */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} OnlyVet. Все права защищены.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                <Link href="/documents/terms" className="hover:text-primary transition-colors">
                  Пользовательское соглашение
                </Link>
                <span>•</span>
                <Link href="/documents/privacy" className="hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
                <span>•</span>
                <p className="text-gray-400">
                  Онлайн-консультация не заменяет очный приём
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
