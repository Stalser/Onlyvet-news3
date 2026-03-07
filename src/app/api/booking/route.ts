import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, isValidEmail, sanitizeHtml } from '@/lib/security';

// In-memory store для rate limiting
const bookingRateLimits = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: NextRequest) {
  const ip = request.ip || 'unknown';
  
  // Rate limiting: 5 запросов в час на один IP
  const isAllowed = checkRateLimit(bookingRateLimits, ip, 5, 60 * 60 * 1000);
  
  if (!isAllowed) {
    return NextResponse.json(
      { error: 'Слишком много запросов. Попробуйте через час.' },
      { status: 429 }
    );
  }
  
  try {
    const body = await request.json();
    
    // Валидация данных
    const { name, email, phone, message } = body;
    
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Имя и email обязательны' },
        { status: 400 }
      );
    }
    
    // Санитизация
    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedPhone = phone ? sanitizeHtml(phone) : '';
    const sanitizedMessage = message ? sanitizeHtml(message) : '';
    
    // Валидация email
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Некорректный email' },
        { status: 400 }
      );
    }
    
    // TODO: Отправка данных
    // 1. Сохранить в базу данных
    // 2. Отправить email администратору
    // 3. Отправить подтверждение пользователю
    // 4. Отправить уведомление в Telegram
    
    console.log('Новая запись:', {
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      message: sanitizedMessage,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена',
    });
    
  } catch (error) {
    console.error('Ошибка при записи:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
