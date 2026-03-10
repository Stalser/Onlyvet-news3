'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { useState } from 'react';

const platforms = {
  telemost: {
    name: 'Яндекс.Телемост',
    description: 'Для видеоконсультаций с врачом',
    icon: (
      <Image
        src="/images/YandexTelemost.svg"
        alt="Яндекс.Телемост"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50',
    hoverColor: 'hover:bg-emerald-100',
    download: {
      android: {
        url: 'https://play.google.com/store/apps/details?id=ru.yandex.telemost',
        name: 'Google Play',
      },
      ios: {
        url: 'https://apps.apple.com/ru/app/id1551491665',
        name: 'App Store',
      },
      windows: {
        url: 'https://telemost.yandex.ru/download/windows',
        name: 'Скачать для Windows',
      },
      macos: {
        url: 'https://telemost.yandex.ru/download/mac',
        name: 'Скачать для macOS',
      },
      web: {
        url: 'https://telemost.yandex.ru/',
        name: 'Открыть в браузере',
      },
    },
    registration: [
      'Откройте приложение или сайт',
      'Нажмите «Войти»',
      'Введите номер телефона или почту Яндекс',
      'Получите код в СМС или письме',
      'Введите код — готово!',
    ],
    tips: [
      'Проверьте работу камеры и микрофона в настройках',
      'Разрешите доступ к камере и микрофону при первом запуске',
      'Для лучшего качества используйте Wi-Fi',
      'Закройте другие приложения, использующие камеру',
    ],
  },
  messenger: {
    name: 'Яндекс.Мессенджер',
    description: 'Для быстрой связи и отправки материалов',
    icon: (
      <Image
        src="/images/Yandex.messanger.svg"
        alt="Яндекс.Мессенджер"
        width={48}
        height={48}
        className="w-12 h-12"
      />
    ),
    color: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-50',
    hoverColor: 'hover:bg-sky-100',
    download: {
      android: {
        url: 'https://play.google.com/store/apps/details?id=ru.yandex.messenger',
        name: 'Google Play',
      },
      ios: {
        url: 'https://apps.apple.com/ru/app/id1529449890',
        name: 'App Store',
      },
      windows: {
        url: 'https://messenger.yandex.ru/download/windows',
        name: 'Скачать для Windows',
      },
      macos: {
        url: 'https://messenger.yandex.ru/download/mac',
        name: 'Скачать для macOS',
      },
      web: {
        url: 'https://messenger.yandex.ru/',
        name: 'Открыть в браузере',
      },
    },
    registration: [
      'Откройте приложение',
      'Нажмите «Начать пользоваться»',
      'Введите номер телефона',
      'Получите код в СМС',
      'Введите код и готово!',
    ],
    tips: [
      'Включите уведомления для быстрых ответов',
      'Разрешите доступ к фото для отправки снимков',
      'Можно отправлять фото, видео и документы',
      'История переписки сохраняется',
    ],
  },
};

export default function SetupGuidePage() {
  const [activePlatform, setActivePlatform] = useState<'telemost' | 'messenger'>('telemost');
  const [activeOS, setActiveOS] = useState<'android' | 'ios' | 'windows' | 'macos' | 'web'>('android');

  const currentPlatform = platforms[activePlatform];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Как подключиться
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Пошаговая инструкция по установке Яндекс.Телемоста и Яндекс.Мессенджера 
                для всех устройств: Android, iPhone, Windows и macOS
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Выбор платформы */}
      <section className="py-4 sm:py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
            {(Object.keys(platforms) as Array<keyof typeof platforms>).map((key) => (
              <button
                key={key}
                onClick={() => setActivePlatform(key)}
                className={`px-2.5 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-3 flex-shrink-0 ${
                  activePlatform === key
                    ? `bg-gradient-to-r ${platforms[key].color} text-white shadow-lg scale-105`
                    : `${platforms[key].bgColor} text-gray-800 ${platforms[key].hoverColor}`
                }`}
              >
                <div className="w-7 h-7 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">{platforms[key].icon}</div>
                <span className="text-xs sm:text-base whitespace-nowrap leading-tight">{platforms[key].name}</span>
              </button>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-3 sm:mt-4 text-xs sm:text-base">{currentPlatform.description}</p>
        </div>
      </section>

      {/* Выбор ОС */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveOS('android')}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                activeOS === 'android' ? 'bg-green-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Image src="/images/android.svg" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              Android
            </button>
            <button
              onClick={() => setActiveOS('ios')}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                activeOS === 'ios' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Image src="/images/app-store.svg" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              iPhone
            </button>
            <button
              onClick={() => setActiveOS('windows')}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                activeOS === 'windows' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.551M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              Windows
            </button>
            <button
              onClick={() => setActiveOS('macos')}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                activeOS === 'macos' ? 'bg-gray-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Image src="/images/macos.svg" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              macOS
            </button>
            <button
              onClick={() => setActiveOS('web')}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                activeOS === 'web' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Image src="/images/web.svg" alt="" width={18} height={18} className="w-4.5 h-4.5" />
              Веб-версия
            </button>
          </div>
        </div>
      </section>

      {/* Инструкция по установке */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Установка для {activeOS === 'android' ? 'Android' : activeOS === 'ios' ? 'iPhone' : activeOS === 'windows' ? 'Windows' : activeOS === 'macos' ? 'macOS' : 'браузера'}
            </h2>
          </FadeIn>

          {/* Кнопка скачивания */}
          <FadeIn delay={100}>
            <div className={`${currentPlatform.bgColor} rounded-2xl p-8 mb-12 text-center`}>
              <div className="flex justify-center mb-4">{currentPlatform.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentPlatform.name}</h3>
              <p className="text-gray-600 mb-6">
                {activeOS === 'web'
                  ? 'Работает прямо в браузере — установка не требуется'
                  : `Скачайте приложение для ${activeOS === 'android' ? 'Android' : activeOS === 'ios' ? 'iPhone' : activeOS === 'windows' ? 'Windows' : 'macOS'}`
                }
              </p>
              <a
                href={currentPlatform.download[activeOS].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                {activeOS === 'android' && (
                  <Image src="/images/google-play.svg" alt="Google Play" width={28} height={28} />
                )}
                {activeOS === 'ios' && (
                  <Image src="/images/app-store.svg" alt="App Store" width={28} height={28} />
                )}
                {activeOS === 'windows' && (
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.551M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                )}
                {activeOS === 'macos' && (
                  <Image src="/images/macos.svg" alt="macOS" width={28} height={28} />
                )}
                {activeOS === 'web' && (
                  <Image src="/images/web.svg" alt="Web" width={28} height={28} />
                )}
                <span className="font-semibold text-gray-700">{currentPlatform.download[activeOS].name}</span>
              </a>
            </div>
          </FadeIn>

          {/* Пошаговая установка */}
          {activeOS !== 'web' && (
            <FadeIn delay={200}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Пошаговая установка:</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Перейдите по ссылке</h4>
                      <p className="text-gray-600">Нажмите кнопку выше — откроется магазин приложений</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Нажмите «Установить»</h4>
                      <p className="text-gray-600">
                        {activeOS === 'android' && 'В Google Play нажмите зелёную кнопку «Установить»'}
                        {activeOS === 'ios' && 'В App Store нажмите «Загрузить» или значок облака'}
                        {activeOS === 'windows' && 'Запустите скачанный файл и следуйте инструкциям'}
                        {activeOS === 'macos' && 'Откройте DMG-файл и перетащите приложение в Программы'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Дождитесь установки</h4>
                      <p className="text-gray-600">Приложение установится автоматически (1-3 минуты)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Откройте приложение</h4>
                      <p className="text-gray-600">Найдите приложение в меню и запустите</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Регистрация */}
          <FadeIn delay={300}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Регистрация и вход:</h3>
              <div className="bg-primary-light/30 rounded-2xl p-8">
                <div className="space-y-4">
                  {currentPlatform.registration.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Советы */}
          <FadeIn delay={400}>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6">
              <h4 className="font-semibold text-amber-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Советы для лучшего качества связи:
              </h4>
              <ul className="space-y-2">
                {currentPlatform.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-amber-800">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Проверка перед консультацией */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Проверьте всё перед консультацией
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={100}>
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Камера
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Убедитесь, что камера работает — откройте любое приложение с камерой
                </p>
                <a
                  href={activeOS === 'web' ? 'https://telemost.yandex.ru/test' : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Проверить камеру →
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Микрофон
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Проверьте микрофон — запишите голосовое сообщение или видео
                </p>
                <a
                  href={activeOS === 'web' ? 'https://mikeTest.org/' : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Проверить микрофон →
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-500">📶</span>
                  Интернет
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Минимальная скорость: 2 Мбит/с для видеозвонка
                </p>
                <a
                  href="https://speedtest.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  Проверить скорость →
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-white rounded-2xl p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-purple-500">🔔</span>
                  Уведомления
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Включите уведомления для получения ссылок на консультацию
                </p>
                <p className="text-gray-500 text-xs">
                  Настройки → Приложения → {currentPlatform.name} → Уведомления
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Всё настроили?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Теперь вы готовы к консультации! Оставьте заявку на сайте.
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
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg"
              >
                Как проходит консультация
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
