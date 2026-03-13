// Типы данных для будущей БД
// Когда подключим БД — импортируем типы отсюда

export type DoctorSpecialization =
  | "терапевт"
  | "диагност"
  | "хирург"
  | "дерматолог"
  | "кардиолог"
  | "невролог";

export interface Doctor {
  id: string;
  initials: string;
  name: string;
  role: string;
  specialization: DoctorSpecialization;
  servicesShort: string;
  servicesFull: string[];
  tags: string[];
  experienceLabel: string;
  imageUrl?: string;
  patientsCount?: string;
  reviewsCount?: string;
  isActive?: boolean;
  sortOrder?: number;
}

export type ReviewSource = "yandex" | "2gis" | "google" | "site" | "vk" | "telegram";

export interface Review {
  id: string;
  clientName: string;
  petName?: string;
  rating: number;
  text: string;
  date: string;
  doctorId?: string;
  serviceId?: string;
  source: ReviewSource;
  isActive?: boolean;
}

export type ServiceCategory =
  | "консультация"
  | "второе мнение"
  | "диагностика"
  | "сопровождение"
  | "диетология"
  | "специалист"
  | "хроника"
  | "подписка";

export type ClientType = "individual" | "breeder" | "shelter";

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string | string[];
  category: ServiceCategory;
  clientType?: ClientType;
  serviceType?: string;
  specializations?: string[];
  tags: string[];
  priceLabel?: string;
  priceFrom?: number;
  price?: string;
  priceValue?: number;
  duration?: string;
  isActive?: boolean;
  sortOrder?: number;
}

// Интерфейс API ответа (для будущей БД)
export interface ApiResponse<T> {
  data: T[];
  total?: number;
  page?: number;
  perPage?: number;
}

// Конфигурация API (будет использоваться при подключении БД)
export const API_CONFIG = {
  // Сейчас данные из файлов, потом заменим на API endpoints
  DOCTORS_API: '/api/doctors',
  SERVICES_API: '/api/services',
  REVIEWS_API: '/api/reviews',
  
  // PocketBase URL (для будущего подключения)
  POCKETBASE_URL: process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090',
  
  // Backend API URL
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4001',
};
