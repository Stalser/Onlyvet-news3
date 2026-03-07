import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';
import { doctors } from '@/data/doctors';
import { services } from '@/data/services';

interface DoctorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

// Заглушки для дипломов (замените на реальные фото)
const diplomaPlaceholders = [
  { id: 1, title: 'Диплом о ветеринарном образовании', year: '2015' },
  { id: 2, title: 'Сертификат по онкологии', year: '2018' },
  { id: 3, title: 'Курс повышения квалификации', year: '2020' },
  { id: 4, title: 'Сертификат по УЗИ-диагностике', year: '2019' },
];

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  const doctorServices = services.filter((s) =>
    s.specializations.includes(doctor.specialization)
  );

  const specializationLabels: Record<string, string> = {
    эксперт: 'Эксперт по сложным случаям',
    терапия: 'Терапевт',
    диагностика: 'Диагност',
    онкология: 'Онколог',
  };

  return (
    <div className="flex flex-col">
      {/* Hero-блок с фото */}
      <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Вертикальное фото */}
            <FadeIn>
              <div className="flex justify-center lg:justify-start">
                {doctor.imageUrl ? (
                  <div className="relative w-64 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-100 ring-4 ring-primary-light shadow-2xl">
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-64 h-80 lg:w-80 lg:h-96 rounded-2xl bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center ring-4 ring-primary-light shadow-2xl">
                    <span className="text-8xl font-bold text-primary opacity-30">
                      {doctor.initials}
                    </span>
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Информация */}
            <div>
              <FadeIn delay={200}>
                <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-2">
                  {specializationLabels[doctor.specialization] || doctor.specialization}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {doctor.name}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {doctor.role}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {doctor.servicesShort}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-sm bg-primary-light text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/booking?doctorId=${doctor.id}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 font-semibold"
                    style={{ color: '#FFFFFF' }}
                  >
                    Записаться к врачу
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary-light transition-all duration-300 font-medium"
                  >
                    Все услуги
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* О враче */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">О специалисте</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Специализация</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {doctor.servicesFull.join(' ')}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Опыт работы</h3>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.experienceLabel}
                </p>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={200}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  С какими проблемами работает
                </h3>
                <ul className="space-y-3">
                  {doctor.servicesFull.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary text-lg mt-0.5">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Достижения и дипломы */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Достижения и дипломы
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Документы об образовании и повышении квалификации
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {diplomaPlaceholders.map((diploma, index) => (
              <FadeIn key={diploma.id} delay={index * 100}>
                <div className="group relative aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  {/* Заглушка - замените на реальные фото дипломов */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">📜</div>
                      <div className="text-xs text-gray-500">Диплом</div>
                    </div>
                  </div>
                  
                  {/* Информация при наведении */}
                  <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="text-center text-white">
                      <p className="font-semibold text-sm mb-1">{diploma.title}</p>
                      <p className="text-xs opacity-80">{diploma.year}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={400}>
            <p className="text-center text-sm text-gray-500 mt-8">
              * Все дипломы и сертификаты действительны и могут быть предоставлены по запросу
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Услуги врача */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Услуги, которые оказывает врач
            </h2>
            <p className="text-gray-600 mb-12">
              Выберите подходящую услугу для записи
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 100}>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-wider text-secondary mb-2">
                    {service.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">
                      {service.priceLabel}
                    </span>
                    <Link
                      href={`/booking?doctorId=${doctor.id}&serviceId=${service.id}`}
                      className="text-primary hover:text-primary-dark font-medium text-sm"
                    >
                      Записаться →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 lg:py-24 bg-primary-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Готовы записаться на консультацию?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
            <Link
              href={`/booking?doctorId=${doctor.id}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              style={{ color: '#FFFFFF' }}
            >
              Записаться к {doctor.name.split(' ')[0]}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
