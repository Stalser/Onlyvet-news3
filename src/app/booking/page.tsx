'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { doctors } from '@/data/doctors';
import { services } from '@/data/services';

type BookingMode = 'site' | 'telegram';

export default function BookingPage() {
  const [mode, setMode] = useState<BookingMode>('site');
  const router = useRouter();

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

  // Выбор врача и услуги
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedService, setSelectedService] = useState('');

  // Прикреплённые материалы (файлы, видео, архивы)
  const [attachments, setAttachments] = useState<File[]>([]);

  // Согласия
  const [consentPersonalData, setConsentPersonalData] = useState(false);
  const [consentOffer, setConsentOffer] = useState(false);
  const [consentRules, setConsentRules] = useState(false);

  // Статус
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Загрузка черновика из localStorage при монтировании
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedDraft = localStorage.getItem('bookingDraft');
    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        if (draft.lastName) setLastName(draft.lastName);
        if (draft.firstName) setFirstName(draft.firstName);
        if (draft.middleName) setMiddleName(draft.middleName);
        if (draft.phone) setPhone(draft.phone);
        if (draft.email) setEmail(draft.email);
        if (draft.telegram) setTelegram(draft.telegram);
        if (draft.petName) setPetName(draft.petName);
        if (draft.petSpecies) setPetSpecies(draft.petSpecies);
        if (draft.petAge) setPetAge(draft.petAge);
        if (draft.petWeight) setPetWeight(draft.petWeight);
        if (draft.complaint) setComplaint(draft.complaint);
        if (draft.selectedDoctor) setSelectedDoctor(draft.selectedDoctor);
        if (draft.selectedService) setSelectedService(draft.selectedService);
        // Видео не сохраняем в localStorage (только метаданные)
        if (draft.videoNames && Array.isArray(draft.videoNames)) {
          console.log('Сохранённые видео:', draft.videoNames);
        }
      } catch (e) {
        console.error('Ошибка загрузки черновика:', e);
      }
    }
  }, []);

  // Автосохранение черновика в localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const draft = {
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
      selectedDoctor,
      selectedService,
      attachmentNames: attachments.map(a => ({ name: a.name, size: a.size, type: a.type })),
    };
    localStorage.setItem('bookingDraft', JSON.stringify(draft));
  }, [
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
    selectedDoctor,
    selectedService,
    attachments,
  ]);

  // Валидация email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Валидация телефона (российский формат)
  const isValidPhone = (phone: string) => {
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    return phoneRegex.test(phone) || (cleanPhone.length === 11 && /^\d+$/.test(cleanPhone));
  };

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
    consentRules &&
    isValidPhone(phone) &&
    isValidEmail(email);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      // Отправка данных на API
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
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
          selectedDoctor,
          selectedService,
          attachments: attachments.map(a => ({ name: a.name, size: a.size, type: a.type })),
          consentPersonalData,
          consentOffer,
          consentRules,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Очищаем черновик и редирект на страницу «Спасибо»
        if (typeof window !== 'undefined') {
          localStorage.removeItem('bookingDraft');
        }
        router.push('/thanks');
      } else {
        alert(`Ошибка: ${result.error || 'Не удалось отправить заявку'}`);
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке заявки. Попробуйте позже или напишите нам в Telegram.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
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
    setSelectedDoctor('');
    setSelectedService('');
    setAttachments([]);
    setConsentPersonalData(false);
    setConsentOffer(false);
    setConsentRules(false);
    setTouched({});
    // Очищаем черновик
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bookingDraft');
    }
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/onlyvet_clinic', '_blank', 'noopener,noreferrer');
  };

  // Обработка загрузки материалов (PDF, JPG, PNG, ZIP, RAR, MP4, MOV, AVI)
  const handleAttachmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || []);
    if (uploadedFiles.length === 0) return;

    // Валидация по типам
    const validTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'application/zip',
      'application/x-rar-compressed',
      'application/x-zip-compressed',
      'video/mp4',
      'video/quicktime',
      'video/x-msvideo',
    ];

    const validFiles = uploadedFiles.filter(file => {
      if (!validTypes.includes(file.type)) {
        // Проверяем по расширению, если тип не определился
        const ext = file.name.split('.').pop()?.toLowerCase();
        if (!['pdf', 'jpg', 'jpeg', 'png', 'zip', 'rar', 'mp4', 'mov', 'avi'].includes(ext || '')) {
          alert(`Файл "${file.name}" имеет недопустимый формат. Разрешены: PDF, JPG, PNG, ZIP, RAR, MP4, MOV, AVI.`);
          return false;
        }
      }

      // Определяем максимальный размер
      const ext = file.name.split('.').pop()?.toLowerCase();
      const isVideo = file.type.startsWith('video/') || ['mp4', 'mov', 'avi'].includes(ext || '');
      const isArchive = file.type.includes('zip') || file.type.includes('rar') || ['zip', 'rar'].includes(ext || '');

      let maxSize = 10 * 1024 * 1024; // 10MB по умолчанию
      if (isVideo) maxSize = 50 * 1024 * 1024; // 50MB для видео
      if (isArchive) maxSize = 100 * 1024 * 1024; // 100MB для архивов

      if (file.size > maxSize) {
        const sizeLabel = isArchive ? '100MB' : isVideo ? '50MB' : '10MB';
        alert(`Файл "${file.name}" слишком большой. Максимальный размер ${sizeLabel}.`);
        return false;
      }
      return true;
    });

    setAttachments(prev => [...prev, ...validFiles]);
    // Очищаем input, чтобы можно было загрузить тот же файл снова
    e.target.value = '';
  };

  // Удаление файла
  const handleRemoveAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  // Получение иконки по типу файла
  const getAttachmentIcon = (file: File) => {
    const ext = file.name.split('.').pop()?.toLowerCase();
    const isVideo = file.type.startsWith('video/') || ['mp4', 'mov', 'avi'].includes(ext || '');
    const isArchive = file.type.includes('zip') || file.type.includes('rar') || ['zip', 'rar'].includes(ext || '');
    const isPdf = file.type === 'application/pdf';
    const isImage = file.type.startsWith('image/');

    if (isVideo) return '🎬';
    if (isArchive) return '📦';
    if (isPdf) return '📄';
    if (isImage) return '🖼️';
    return '📎';
  };

  // Получение лимита размера для типа файла
  const getSizeLimit = (file: File) => {
    const ext = file.name.split('.').pop()?.toLowerCase();
    const isVideo = file.type.startsWith('video/') || ['mp4', 'mov', 'avi'].includes(ext || '');
    const isArchive = file.type.includes('zip') || file.type.includes('rar') || ['zip', 'rar'].includes(ext || '');

    if (isArchive) return '100MB';
    if (isVideo) return '50MB';
    return '10MB';
  };

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
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <Image src="/images/svg/telegram-logo.svg" alt="Telegram" width={24} height={24} className="w-8 h-8" />
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
                      {touched.phone && phone.trim() && !isValidPhone(phone) && (
                        <p className="text-red-500 text-xs mt-1">Введите корректный номер телефона</p>
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
                      {touched.email && email.trim() && !isValidEmail(email) && (
                        <p className="text-red-500 text-xs mt-1">Введите корректный email</p>
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

                {/* Выбор врача и услуги */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">4</span>
                    Выбор врача и услуги
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Выбор врача */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Желаемый врач
                      </label>
                      <select
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Любой врач</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} — {doctor.role}
                          </option>
                        ))}
                      </select>
                      {selectedDoctor && (
                        <p className="text-xs text-gray-500 mt-1">
                          ✅ Выбран конкретный врач
                        </p>
                      )}
                    </div>

                    {/* Выбор услуги */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Услуга
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Не выбрано</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name} — {service.priceLabel}
                          </option>
                        ))}
                      </select>
                      {selectedService && (
                        <p className="text-xs text-gray-500 mt-1">
                          ✅ Выбрана услуга
                        </p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Прикреплённые материалы */}
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">5</span>
                    Материалы к консультации
                  </h2>

                  {/* Зона загрузки */}
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-primary transition-colors bg-gray-50">
                    <input
                      type="file"
                      id="attachment-upload"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.zip,.rar,.mp4,.mov,.avi"
                      onChange={handleAttachmentUpload}
                      className="hidden"
                    />
                    <label htmlFor="attachment-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <span className="text-5xl mb-3">📎</span>
                        <p className="text-gray-800 font-semibold mb-1">
                          Перетащите файлы сюда или нажмите для выбора
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                          <span className="text-xs px-2 py-1 bg-white rounded border text-gray-600">📄 PDF</span>
                          <span className="text-xs px-2 py-1 bg-white rounded border text-gray-600">🖼️ JPG, PNG</span>
                          <span className="text-xs px-2 py-1 bg-white rounded border text-gray-600">📦 ZIP, RAR</span>
                          <span className="text-xs px-2 py-1 bg-white rounded border text-gray-600">🎬 MP4, MOV, AVI</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">
                          Документы до 10MB • Видео до 50MB • Архивы до 100MB
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Список загруженных файлов */}
                  {attachments.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-700">
                          Прикреплённые файлы ({attachments.length})
                        </p>
                        <button
                          type="button"
                          onClick={() => setAttachments([])}
                          className="text-xs text-red-500 hover:text-red-700 hover:underline"
                        >
                          Очистить все
                        </button>
                      </div>
                      {attachments.map((file, index) => {
                        const icon = getAttachmentIcon(file);
                        const sizeLimit = getSizeLimit(file);

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-primary/50 transition-colors"
                          >
                            <span className="text-2xl flex-shrink-0">{icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB • Лимит: {sizeLimit}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveAttachment(index)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                              title="Удалить"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Совет */}
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">💡 Совет:</span> Прикрепите анализы, фото или видео питомца — 
                      это поможет врачу точнее оценить ситуацию. Для большого количества файлов используйте ZIP/RAR архив.
                    </p>
                  </div>
                </section>

                {/* Договор и согласия */}
                <section className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-sm font-bold">7</span>
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
