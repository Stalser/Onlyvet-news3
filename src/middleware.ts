import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rate limiting in-memory store (для production лучше использовать Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

const WINDOW_MS = 60 * 1000; // 1 минута
const MAX_REQUESTS = 30; // макс. запросов в минуту

export function middleware(request: NextRequest) {
  // Получаем IP из заголовков
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  const now = Date.now();
  
  // Rate limiting
  const record = requestCounts.get(ip);
  
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + WINDOW_MS });
  } else {
    record.count++;
    if (record.count > MAX_REQUESTS) {
      return new NextResponse('Too Many Requests', { 
        status: 429,
        headers: { 'Retry-After': '60' }
      });
    }
    requestCounts.set(ip, record);
  }
  
  // Очистка старых записей
  if (now % 10000 < 1000) {
    for (const [key, value] of requestCounts.entries()) {
      if (now > value.resetTime) {
        requestCounts.delete(key);
      }
    }
  }
  
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // Удаление серверных заголовков
  response.headers.delete('X-Powered-By');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|public).*)',
  ],
};
