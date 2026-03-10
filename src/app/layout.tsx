import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import OfflinePage from "@/components/OfflinePage";
import YandexWidget from "@/components/YandexWidget";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: 'OnlyVet — Профессиональные онлайн-консультации ветеринарного врача',
    template: '%s | OnlyVet',
  },
  description: 'Экспертные ветеринарные консультации для кошек и собак дистанционно. Разбор анализов, второе мнение, сопровождение хронических заболеваний.',
  keywords: ['ветеринар онлайн', 'консультация ветеринара', 'ветеринарная помощь', 'кот', 'собака', 'анализы животных', 'второе мнение ветеринара'],
  authors: [{ name: 'OnlyVet' }],
  creator: 'OnlyVet',
  publisher: 'OnlyVet',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onlyvet-news3.vercel.app'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'OnlyVet',
    title: 'OnlyVet — Профессиональные онлайн-консультации ветеринарного врача',
    description: 'Экспертные ветеринарные консультации для кошек и собак дистанционно',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OnlyVet — Ветеринарные онлайн-консультации',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyVet',
    description: 'Экспертные ветеринарные консультации для кошек и собак дистанционно',
    creator: '@onlyvet_clinic',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#2C5F72" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OnlyVet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <OfflinePage />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
        <YandexWidget />
      </body>
    </html>
  );
}
