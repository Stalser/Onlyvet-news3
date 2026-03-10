import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, isValidEmail, sanitizeHtml, isValidPhone } from '@/lib/security';

// In-memory store для rate limiting
const bookingRateLimits = new Map<string, { count: number; resetTime: number }>();

/**
 * Отправка уведомления в Telegram
 */
async function sendTelegramNotification(data: {
  lastName: string;
  firstName: string;
  middleName?: string;
  phone: string;
  email: string;
  telegram?: string;
  petName: string;
  petSpecies?: string;
  petAge?: string;
  petWeight?: string;
  complaint: string;
  selectedDoctor?: string;
  selectedService?: string;
  attachments?: Array<{ name: string; size: number; type: string }>;
}): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram credentials not configured');
    return false;
  }

  const message = `
🔔 <b>Новая заявка на консультацию</b>

👤 <b>Клиент:</b>
• Фамилия: ${data.lastName}
• Имя: ${data.firstName}
${data.middleName ? `• Отчество: ${data.middleName}` : ''}
• Телефон: ${data.phone}
• Email: ${data.email}
${data.telegram ? `• Telegram: ${data.telegram}` : ''}

🐾 <b>Питомец:</b>
• Кличка: ${data.petName}
${data.petSpecies ? `• Вид: ${data.petSpecies}` : ''}
${data.petAge ? `• Возраст: ${data.petAge}` : ''}
${data.petWeight ? `• Вес: ${data.petWeight}` : ''}

📋 <b>Проблема:</b>
${data.complaint}
${data.selectedDoctor ? `\n👨‍⚕️ <b>Врач:</b> ${data.selectedDoctor}` : ''}
${data.selectedService ? `\n💼 <b>Услуга:</b> ${data.selectedService}` : ''}
${data.attachments && data.attachments.length > 0 ? `\n📎 <b>Материалы:</b> ${data.attachments.length} шт.` : ''}

⏰ <b>Время заявки:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error('Telegram send error:', error);
    return false;
  }
}

/**
 * Отправка email уведомления (заглушка для будущей реализации)
 */
async function sendEmailNotification(data: Record<string, unknown>): Promise<boolean> {
  // TODO: Реализовать отправку через SMTP или сервис типа Resend/SendGrid
  console.log('Email notification (not implemented):', data);
  return false;
}

export async function POST(request: NextRequest) {
  // Получаем IP из заголовков
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

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

    // Валидация обязательных полей
    const {
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
      consentPersonalData,
      consentOffer,
      consentRules,
    } = body;

    if (!lastName || !firstName || !phone || !email || !petName || !complaint) {
      return NextResponse.json(
        { error: 'Все обязательные поля должны быть заполнены' },
        { status: 400 }
      );
    }

    // Проверка согласий
    if (!consentPersonalData || !consentOffer || !consentRules) {
      return NextResponse.json(
        { error: 'Необходимо принять все согласия' },
        { status: 400 }
      );
    }

    // Валидация email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Некорректный email' },
        { status: 400 }
      );
    }

    // Валидация телефона
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Некорректный номер телефона' },
        { status: 400 }
      );
    }

    // Санитизация данных
    const sanitizedData = {
      lastName: sanitizeHtml(lastName),
      firstName: sanitizeHtml(firstName),
      middleName: middleName ? sanitizeHtml(middleName) : '',
      phone: sanitizeHtml(phone),
      email: sanitizeHtml(email),
      telegram: telegram ? sanitizeHtml(telegram) : '',
      petName: sanitizeHtml(petName),
      petSpecies: petSpecies ? sanitizeHtml(petSpecies) : '',
      petAge: petAge ? sanitizeHtml(petAge) : '',
      petWeight: petWeight ? sanitizeHtml(petWeight) : '',
      complaint: sanitizeHtml(complaint),
      selectedDoctor: selectedDoctor ? sanitizeHtml(selectedDoctor) : '',
      selectedService: selectedService ? sanitizeHtml(selectedService) : '',
      attachments: attachments || [],
    };

    // Отправка уведомлений параллельно
    const [telegramSent, emailSent] = await Promise.all([
      sendTelegramNotification(sanitizedData),
      sendEmailNotification(sanitizedData),
    ]);

    // Логируем (в production можно убрать)
    console.log('Новая заявка:', {
      ...sanitizedData,
      telegramSent,
      emailSent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена',
      notifications: {
        telegram: telegramSent,
        email: emailSent,
      },
    });

  } catch (error) {
    console.error('Ошибка при записи:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
