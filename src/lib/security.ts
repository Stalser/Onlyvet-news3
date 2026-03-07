/**
 * Утилиты безопасности для OnlyVet
 */

// Санитизация HTML для защиты от XSS
export function sanitizeHtml(input: string): string {
  if (typeof window === 'undefined') return input;
  
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Валидация email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Валидация телефона (Россия)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return phoneRegex.test(phone);
}

// Генерация CSRF токена
export function generateCsrfToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Rate limit helper для API
export function checkRateLimit(store: Map<string, any>, key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = store.get(key);
  
  if (!record || now > record.resetTime) {
    store.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  record.count++;
  if (record.count > limit) {
    return false;
  }
  
  store.set(key, record);
  return true;
}

// Маскировка персональных данных
export function maskPersonalData(data: { email?: string; phone?: string }): { email?: string; phone?: string } {
  const masked: { email?: string; phone?: string } = {};
  
  if (data.email) {
    const [name, domain] = data.email.split('@');
    masked.email = `${name.slice(0, 2)}***@${domain}`;
  }
  
  if (data.phone) {
    const digits = data.phone.replace(/\D/g, '');
    masked.phone = `+7***${digits.slice(-4)}`;
  }
  
  return masked;
}

// Логирование с маскировкой
export function safeLog(message: string, data?: any): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, data);
  } else {
    // В production логируем без чувствительных данных
    console.log(message);
  }
}
