'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

type BookingMode = 'site' | 'telegram';

export default function BookingPage() {
  const [mode, setMode] = useState<BookingMode>('site');

  // Контакты
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');

  // Питомец
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petWeight, setPetWeight] = useState('');

  // Проблема
  const [complaint, setComplaint] = useState('');

  // Согласия
  const [consentPersonalData, setConsentPersonalData] = useState(false);
  const [consentOffer, setConsentOffer] = useState(false);
  const [consentRules, setConsentRules] = useState(false);

  // Статус
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Валидация
  const isFormValid = 
    lastName.trim() &&
    firstName.trim() &&
    phone.trim() &&
    email.trim() &&
    petName.trim() &&
    complaint.trim() &&
    consentPersonalData &&
    consentOffer &&
    consentRules;

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) return;
    
    setIsSubmitting(true);

    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log({
      lastName,
      firstName,
      middleName,
      phone,
      email,
      telegram,
      petName,
      petSpecies,
      petAge,
      petWeight,
      complaint,
      consentPersonalData,
      consentOffer,
      consentRules,
    });

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setLastName('');
    setFirstName('');
    setMiddleName('');
    setPhone('');
    setEmail('');
    setTelegram('');
    setPetName('');
    setPetSpecies('');
    setPetAge('');
    setPetWeight('');
    setComplaint('');
    setConsentPersonalData(false);
    setConsentOffer(false);
    setConsentRules(false);
    setTouched({});
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/onlyvet_clinic', '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 bg-gradient-to-br from-primary-light via-white to-white py-16">
          <div className="max-w-2xl mx-auto px-4">
            <FadeIn>
              <section className="bg-white rounded-3xl border border-emerald-200 shadow-xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 text-3xl">✓</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Заявка отправлена
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Мы получили вашу заявку. Администратор свяжется с вами в ближайшее время
                      для подтверждения времени консультации и уточнения деталей.
                    </p>
                  </div>
                </div>

                <div className="bg-primary-light p-4 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Что дальше?</span>
                    <br />
                    1. Мы проверим вашу заявку в течение 1-2 часов
                    <br />
                    2. Свяжемся с вами по указанному телефону или в Telegram
                    <br />
                    3. Согласуем удобное время и форму консультации
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition shadow-md"
                    style={{ color: '#FFFFFF' }}
                  >
                    Создать новую заявку
                  </button>
                  <Link
                    href="/"
                    className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                  >
                    На главную
                  </Link>
                </div>
              </section>
            </FadeIn>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-br from-primary-light via-white to-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Хлебные крошки */}
          <FadeIn>
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Главная</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Запись на консультацию</span>
            </nav>
          </FadeIn>

          {/* Заголовок */}
          <FadeIn delay={100}>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Запись на онлайн-консультацию
              </h1>
              <p className="text-gray-600 text-lg">
                Выберите удобный способ записи
              </p>
            </div>
          </FadeIn>

          {/* Выбор способа записи */}
          <FadeIn delay={200}>
            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Заявка через сайт */}
                <button
                  type="button"
                  onClick={() => setMode('site')}
                  className={`
                    rounded-3xl border-2 px-6 py-6 text-left
                    transition-all duration-300
                    flex flex-col justify-between
                    ${mode === 'site'
                      ? 'bg-emerald-50 border-emerald-300 shadow-lg -translate-y-1'
                      : 'bg-white border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 hover:-translate-y-1'
                    }
                  `}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-gray-900">Заявка через сайт</div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Заполните подробную форму — так мы сможем сразу оценить вашу ситуацию и подготовить рекомендации.
                    </p>
                    <div className="bg-emerald-100 rounded-2xl px-4 py-3">
                      <p className="text-xs text-emerald-800 font-medium">
                        ✓ Рекомендуется для сложных случаев
                      </p>
                    </div>
                  </div>
                </button>

                {/* Telegram */}
                <button
                  type="button"
                  onClick={handleTelegramClick}
                  className="
                    rounded-3xl border-2 border-sky-200 bg-sky-50
                    px-6 py-6 text-left
                    transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1 hover:border-sky-300
                    flex flex-col justify-between
                  "
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center">
                        <img src="/images/free-icon-telegram-2111646.svg" alt="Telegram" className="w-6 h-6" />
                      </div>
                      <div className="text-lg font-bold text-gray-900">Через Telegram</div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Напишите администратору в Telegram — удобно для быстрых вопросов и записи.
                    </p>
                    <div className="bg-sky-100 rounded-2xl px-4 py-3">
                      <p className="text-xs text-sky-800 font-medium">
                        ✈ Быстрый ответ в мессенджере
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </section>
          </FadeIn>

          {/* Форма (только для режима "site") */}
          {mode === 'site' && (
            <FadeIn delay={300}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-200 shadow-xl p-6 md:p-8 space-y-8"
              >
                {/* Контактные данные */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">1</span>
                    Контактные данные <span className="text-red-500">*</span>
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Фамилия <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        onBlur={() => handleBlur('lastName')}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          touched.lastName && !lastName.trim() 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-300 focus:border-primary focus:ring-primary-200'
                        } focus:ring-2 focus:ring-opacity-50 outline-none transition-all`}
                        placeholder="Иванов"
                      />
                      {touched.lastName && !lastName.trim() && (
                        <p className="text-red-500 text-xs mt-1">Обязательное поле</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Имя <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        onBlur={() => handleBlur('firstName')}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          touched.firstName && !firstName.trim() 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-300 focus:border-primary focus:ring-primary-200'
                        } focus:ring-2 focus:ring-opacity-50 outline-none transition-all`}
                        placeholder="Иван"
                      />
                      {touched.firstName && !firstName.trim() && (
                        <p className="text-red-500 text-xs mt-1">Обязательное поле</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Отчество
                      </label>
                      <input
                        type="text"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Иванович"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          touched.phone && !phone.trim() 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-300 focus:border-primary focus:ring-primary-200'
                        } focus:ring-2 focus:ring-opacity-50 outline-none transition-all`}
                        placeholder="+7 900 000-00-00"
                      />
                      {touched.phone && !phone.trim() && (
                        <p className="text-red-500 text-xs mt-1">Обязательное поле</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleBlur('email')}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          touched.email && !email.trim() 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-300 focus:border-primary focus:ring-primary-200'
                        } focus:ring-2 focus:ring-opacity-50 outline-none transition-all`}
                        placeholder="example@mail.ru"
                      />
                      {touched.email && !email.trim() && (
                        <p className="text-red-500 text-xs mt-1">Обязательное поле</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telegram
                      </label>
                      <input
                        type="text"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="@username"
                      />
                    </div>
                  </div>
                </section>

                {/* Информация о питомце */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">2</span>
                    Информация о питомце <span className="text-red-500">*</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Кличка <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        onBlur={() => handleBlur('petName')}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          touched.petName && !petName.trim() 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-300 focus:border-primary focus:ring-primary-200'
                        } focus:ring-2 focus:ring-opacity-50 outline-none transition-all`}
                        placeholder="Барсик"
                      />
                      {touched.petName && !petName.trim() && (
                        <p className="text-red-500 text-xs mt-1">Обязательное поле</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Вид животного
                      </label>
                      <input
                        type="text"
                        value={petSpecies}
                        onChange={(e) => setPetSpecies(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Кошка / Собака"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Возраст
                      </label>
                      <input
                        type="text"
                        value={petAge}
                        onChange={(e) => setPetAge(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="2 года"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Вес
                      </label>
                      <input
                        type="text"
                        value={petWeight}
                        onChange={(e) => setPetWeight(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="5 кг"
                      />
                    </div>
                  </div>
                </section>

                {/* Описание проблемы */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">3</span>
                    Описание проблемы <span className="text-red-500">*</span>
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Подробно опишите симптомы и ситуацию <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={complaint}
                      onChange={(e) => setComplaint(e.target.value)}
                      onBlur={() => handleBlur('complaint')}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        touched.complaint && !complaint.trim() 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:border-primary focus:ring-primary-200'
                      } focus:ring-2 focus:ring-opacity-50 outline-none transition-all resize-none`}
                      placeholder="Опишите, что вас беспокоит: когда появились симптомы, что менялось в состоянии, какие были назначения..."
                    />
                    {touched.complaint && !complaint.trim() && (
                      <p className="text-red-500 text-xs mt-1">Обязательное поле</p>
                    )}
                  </div>
                  <div className="mt-4 bg-primary-light p-4 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">💡 Совет:</span> Чем подробнее вы опишете проблему, 
                      тем точнее врач сможет оценить ситуацию. Приложите результаты анализов, если они есть.
                    </p>
                  </div>
                </section>

                {/* Договор и согласия */}
                <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">4</span>
                    Договор и согласия <span className="text-red-500">*</span>
                  </h2>
                  
                  {/* Договор */}
                  <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-start gap-3">
                      <input
                        id="contract"
                        type="checkbox"
                        checked={consentOffer}
                        onChange={(e) => setConsentOffer(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="contract" className="text-sm text-gray-700 leading-relaxed">
                        Я подтверждаю, что ознакомлен(а) и принимаю условия{' '}
                        <a
                          href="/documents/terms.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                        >
                          договора на оказание ветеринарных услуг
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <span className="text-red-500"> *</span>
                      </label>
                    </div>
                  </div>

                  {/* Согласия */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <input
                        id="consent-personal"
                        type="checkbox"
                        checked={consentPersonalData}
                        onChange={(e) => setConsentPersonalData(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="consent-personal" className="text-sm text-gray-700 leading-relaxed">
                        Я согласен(на) на{' '}
                        <Link href="/documents/privacy" className="text-primary hover:underline font-medium">
                          обработку персональных данных
                        </Link>
                        <span className="text-red-500"> *</span>
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        id="consent-rules"
                        type="checkbox"
                        checked={consentRules}
                        onChange={(e) => setConsentRules(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="consent-rules" className="text-sm text-gray-700 leading-relaxed">
                        Я принимаю условия{' '}
                        <Link href="/documents/site-rules" className="text-primary hover:underline font-medium">
                          правил использования сервиса
                        </Link>
                        <span className="text-red-500"> *</span>
                      </label>
                    </div>
                  </div>

                  {/* Предупреждение */}
                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-sm text-amber-800">
                      <span className="font-semibold">⚠️ Важно:</span> Онлайн-консультация не заменяет очный приём. 
                      В экстренных случаях (травма, отравление, кровотечение) немедленно обратитесь в ближайшую клинику.
                    </p>
                  </div>
                </section>

                {/* Кнопка отправки */}
                <section className="pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                      isFormValid && !isSubmitting
                        ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    style={isFormValid && !isSubmitting ? { color: '#FFFFFF' } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Отправка...
                      </span>
                    ) : (
                      'Отправить заявку'
                    )}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    После отправки вы получите подтверждение на указанный email
                  </p>
                </section>
              </form>
            </FadeIn>
          )}
        </div>
      </main>
    </div>
  );
}
