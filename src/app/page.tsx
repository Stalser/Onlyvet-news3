import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import DoctorCard from '@/components/DoctorCard';
import ReviewCard from '@/components/ReviewCard';
import Carousel from '@/components/Carousel';
import FadeIn from '@/components/FadeIn';
import ScaleIn from '@/components/ScaleIn';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { reviews } from '@/data/reviews';

const whenSuitable = [
  { icon: '🔍', title: 'Разобраться в симптомах', description: 'Понять, насколько серьёзна ситуация' },
  { icon: '📊', title: 'Интерпретировать анализы', description: 'Получить расшифровку исследований' },
  { icon: '🩺', title: 'Получить второе мнение', description: 'Убедиться в правильности диагноза' },
  { icon: '📋', title: 'Сопровождение заболеваний', description: 'Корректировка терапии' },
];

const consultationSteps = [
  { step: '01', title: 'Опишите ситуацию', description: 'Заполните форму и приложите документы' },
  { step: '02', title: 'Врач изучает информацию', description: 'Анализирует данные и готовит вопросы' },
  { step: '03', title: 'Онлайн-консультация', description: 'Видеозвонок или чат с врачом' },
  { step: '04', title: 'Письменное заключение', description: 'Рекомендации и план действий' },
];

const safetyPoints = [
  { icon: '👨‍⚕️', title: 'Квалифицированные врачи', description: 'Высшее образование и сертификаты' },
  { icon: '📚', title: 'Доказательная медицина', description: 'Научные данные и протоколы' },
  { icon: '🔒', title: 'Конфиденциальность', description: 'Защита ваших данных' },
  { icon: '⚖️', title: 'Прозрачность', description: 'Чёткие правила сервиса' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero-блок — главный экран */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light/30 py-24 lg:py-32 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light rounded-full filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-light rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-light/50 to-secondary-light/50 rounded-full filter blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Логотип/Слоган — главный заголовок */}
            <FadeIn delay={0}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    За пределами заботы
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-sm uppercase tracking-widest font-medium">Beyond Care</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300" />
                </div>
              </div>
            </FadeIn>

            {/* Подзаголовок */}
            <FadeIn delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональные онлайн-консультации{' '}
                <span className="text-primary">ветеринарного врача</span>
              </h2>
            </FadeIn>

            {/* Описание */}
            <FadeIn delay={400}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Экспертная помощь для кошек и собак дистанционно. 
                Без стресса для вашего питомца и потери времени на поездку в клинику.
              </p>
            </FadeIn>

            {/* Иллюстрация с питомцами */}
            <FadeIn delay={500}>
              <div className="flex justify-center items-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-7xl mb-2 animate-float">🐱</div>
                  <p className="text-sm text-gray-500 font-medium">Кошки</p>
                </div>
                <div className="text-4xl text-gray-300">&</div>
                <div className="text-center">
                  <div className="text-7xl mb-2 animate-float" style={{ animationDelay: '0.5s' }}>🐶</div>
                  <p className="text-sm text-gray-500 font-medium">Собаки</p>
                </div>
              </div>
            </FadeIn>

            {/* Кнопки */}
            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg transform hover:-translate-y-1"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="mr-2">📝</span>
                  Записаться на консультацию
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary-light hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-1"
                >
                  <span className="mr-2">ℹ️</span>
                  Узнать больше об услугах
                </Link>
              </div>
            </FadeIn>

            {/* Преимущества */}
            <FadeIn delay={800}>
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Без стресса для питомца</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Опытные врачи</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Письменное заключение</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-sm font-medium">Доказательная медицина</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Когда онлайн-консультация подходит */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Когда подходит онлайн-консультация
              </h2>
              <p className="text-lg text-gray-600">Онлайн-формат эффективен для многих неэкстренных ситуаций</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whenSuitable.map((item, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-primary-light transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Как проходит консультация */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Как проходит консультация
              </h2>
              <p className="text-base md:text-lg text-gray-600">Простой процесс из четырёх шагов</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {consultationSteps.map((item, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="relative">
                  <div className="text-5xl font-bold text-primary mb-4 drop-shadow-sm">{item.step}</div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Безопасность */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Почему сервис безопасен
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyPoints.map((item, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="p-6 bg-gray-50 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
              <p className="text-lg text-gray-600">Профессиональные ветеринарные консультации дистанционно</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScaleIn key={service.id} delay={index * 100}>
                <ServiceCard service={service} />
              </ScaleIn>
            ))}
          </div>
          <FadeIn delay={600}>
            <div className="text-center mt-12">
              <Link href="/services" className="text-primary hover:text-primary-dark font-medium">
                Все услуги →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Врачи */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши специалисты</h2>
              <p className="text-lg text-gray-600">Опытные ветеринарные врачи</p>
            </div>
          </FadeIn>
          <Carousel itemsPerPage={3} autoPlay autoPlayInterval={7000}>
            {doctors.map((doctor) => (
              <Link key={doctor.id} href={`/doctors/${doctor.id}`} className="block group">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-primary-light hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  
                  {/* Аватар и специализация */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Круглый аватар */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center ring-4 ring-primary-light/20 group-hover:ring-primary-light/40 transition-all">
                        <span className="text-2xl font-bold text-white">{doctor.initials}</span>
                      </div>
                      {/* Индикатор активности */}
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full" title="Доступен для консультаций"></div>
                    </div>
                    
                    {/* Бейдж специализации */}
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      doctor.specialization === 'терапевт' ? 'bg-blue-100 text-blue-700' :
                      doctor.specialization === 'диагност' ? 'bg-purple-100 text-purple-700' :
                      doctor.specialization === 'хирург' ? 'bg-red-100 text-red-700' :
                      doctor.specialization === 'дерматолог' ? 'bg-orange-100 text-orange-700' :
                      doctor.specialization === 'кардиолог' ? 'bg-pink-100 text-pink-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {doctor.specialization.charAt(0).toUpperCase() + doctor.specialization.slice(1)}
                    </span>
                  </div>

                  {/* Информация о враче */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 font-medium line-clamp-2">
                      {doctor.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {doctor.servicesShort}
                    </p>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {doctor.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Разделитель */}
                  <div className="border-t border-gray-100 my-4"></div>

                  {/* Статистика и опыт */}
                  <div className="space-y-3 mb-4">
                    {/* Статистика */}
                    <div className="flex items-center justify-between text-center">
                      <div className="flex-1">
                        <div className="text-lg font-bold text-primary">{doctor.patientsCount}</div>
                        <div className="text-xs text-gray-500">Пациентов</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="flex-1">
                        <div className="text-lg font-bold text-primary">{doctor.reviewsCount}</div>
                        <div className="text-xs text-gray-500">Отзывов</div>
                      </div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="flex-1">
                        <div className="text-lg font-bold text-primary">5.0</div>
                        <div className="text-xs text-gray-500">Рейтинг</div>
                      </div>
                    </div>
                    
                    {/* Опыт */}
                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-green-500">✓</span>
                      <span className="font-medium">{doctor.experienceLabel}</span>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <div className="mt-auto">
                    <div className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold shadow-md hover:shadow-lg group-hover:shadow-lg" style={{ color: '#FFFFFF' }}>
                      Записаться на консультацию
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
          <FadeIn delay={600}>
            <div className="text-center mt-12">
              <Link href="/doctors" className="text-primary hover:text-primary-dark font-medium">
                Все врачи →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы владельцев</h2>
            </div>
          </FadeIn>
          <Carousel itemsPerPage={3} autoPlay autoPlayInterval={6000}>
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                    <span className="text-xl">🐾</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.clientName}</p>
                    <p className="text-sm text-gray-500">{review.petName}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {review.text.length > 150 ? review.text.slice(0, 150) + '...' : review.text}
                </p>
                <Link
                  href="/reviews"
                  className="text-primary hover:text-primary-dark font-medium text-sm mt-4 inline-block"
                >
                  Читать полностью →
                </Link>
              </div>
            ))}
          </Carousel>
          <FadeIn delay={600}>
            <div className="text-center mt-12">
              <Link href="/reviews" className="text-primary hover:text-primary-dark font-medium">
                Читать все отзывы →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Мы в социальных сетях */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light/40 via-white to-secondary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Мы в социальных сетях
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Подписывайтесь на OnlyVet — делимся историями пациентов, рекомендациями и полезными подсказками.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* ВКонтакте */}
            <ScaleIn delay={0}>
              <a
                href="https://vk.com/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-blue-100 hover:border-blue-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Image src="/images/svg/vk-logo2.svg" alt="VK" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">ВКонтакте</h3>
                <p className="text-gray-600 text-sm">Новости и разборы анализов.</p>
              </a>
            </ScaleIn>

            {/* Telegram */}
            <ScaleIn delay={100}>
              <a
                href="https://t.me/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-sky-100 hover:border-sky-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-sky-50 rounded-2xl group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                  <Image src="/images/svg/telegram-logo2.svg" alt="Telegram" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">Telegram</h3>
                <p className="text-gray-600 text-sm">Разборы сложных случаев и ответы на вопросы.</p>
              </a>
            </ScaleIn>

            {/* Instagram */}
            <ScaleIn delay={200}>
              <a
                href="https://instagram.com/onlyvet_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-purple-100 hover:border-purple-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-purple-50 rounded-2xl group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                  <Image src="/images/svg/instagram-sign-logo2.svg" alt="Instagram" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Instagram*</h3>
                <p className="text-gray-600 text-sm">Истории пациентов и визуальные схемы.</p>
              </a>
            </ScaleIn>

            {/* Одноклассники */}
            <ScaleIn delay={300}>
              <a
                href="https://ok.ru/onlyvet"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-orange-100 hover:border-orange-400 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-orange-50 rounded-2xl group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
                  <Image src="/images/svg/ok-sign-logo2.svg" alt="OK" width={64} height={64} loading="lazy" decoding="async" className="w-14 h-14" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Одноклассники</h3>
                <p className="text-gray-600 text-sm">Полезные советы и материалы.</p>
              </a>
            </ScaleIn>
          </div>
          <FadeIn delay={400}>
            <p className="text-xs text-gray-400 mt-8 text-center">
              * Instagram принадлежит компании Meta Platforms Inc., деятельность которой запрещена на территории РФ как экстремистская организация.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы записаться на консультацию?
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg"
                style={{ color: '#FFFFFF' }}
              >
                Заполнить форму записи
              </Link>
              <a
                href="mailto:consult@onlyvet.ru"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-light transition-all duration-300 text-lg"
              >
                Написать на почту
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
