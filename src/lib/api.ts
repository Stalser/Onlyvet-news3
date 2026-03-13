// API utilities для будущей работы с БД
// Сейчас возвращает данные из файлов, потом можно переключить на API

import { Doctor, Service, Review, ApiResponse } from './types';
import { doctors as localDoctors } from './doctors';
import { services as localServices } from './services';
import { reviews as localReviews } from './reviews';

// Флаг для переключения между локальными данными и API
const USE_API = false; // Когда будет готова БД — поставить true

/**
 * Получить всех врачей
 * Сейчас из локального файла, потом из API
 */
export async function getDoctors(): Promise<Doctor[]> {
  if (USE_API) {
    try {
      const response = await fetch('/api/doctors');
      if (!response.ok) throw new Error('Failed to fetch doctors');
      const data: ApiResponse<Doctor> = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching doctors:', error);
      return [];
    }
  }
  
  // Возвращаем локальные данные (fallback)
  return localDoctors;
}

/**
 * Получить врача по ID
 */
export async function getDoctorById(id: string): Promise<Doctor | null> {
  if (USE_API) {
    try {
      const response = await fetch(`/api/doctors/${id}`);
      if (!response.ok) throw new Error('Failed to fetch doctor');
      const data: { doctor: Doctor } = await response.json();
      return data.doctor || null;
    } catch (error) {
      console.error('Error fetching doctor:', error);
      return null;
    }
  }
  
  // Локальный поиск
  return localDoctors.find(d => d.id === id) || null;
}

/**
 * Получить все услуги
 */
export async function getServices(): Promise<Service[]> {
  if (USE_API) {
    try {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('Failed to fetch services');
      const data: ApiResponse<Service> = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching services:', error);
      return [];
    }
  }
  
  return localServices;
}

/**
 * Получить услугу по ID
 */
export async function getServiceById(id: string): Promise<Service | null> {
  if (USE_API) {
    try {
      const response = await fetch(`/api/services/${id}`);
      if (!response.ok) throw new Error('Failed to fetch service');
      const data: { service: Service } = await response.json();
      return data.service || null;
    } catch (error) {
      console.error('Error fetching service:', error);
      return null;
    }
  }
  
  return localServices.find(s => s.id === id) || null;
}

/**
 * Получить все отзывы
 */
export async function getReviews(): Promise<Review[]> {
  if (USE_API) {
    try {
      const response = await fetch('/api/reviews');
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const data: ApiResponse<Review> = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }
  
  return localReviews;
}

/**
 * Получить отзывы по врачу
 */
export async function getReviewsByDoctor(doctorId: string): Promise<Review[]> {
  if (USE_API) {
    try {
      const response = await fetch(`/api/reviews?doctorId=${doctorId}`);
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const data: ApiResponse<Review> = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }
  
  return localReviews.filter(r => r.doctorId === doctorId);
}

/**
 * Создать отзыв (для будущей формы)
 */
export async function createReview(review: Omit<Review, 'id' | 'date'>): Promise<Review | null> {
  if (USE_API) {
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      });
      if (!response.ok) throw new Error('Failed to create review');
      const data: { review: Review } = await response.json();
      return data.review || null;
    } catch (error) {
      console.error('Error creating review:', error);
      return null;
    }
  }
  
  console.warn('createReview not available in local mode');
  return null;
}
