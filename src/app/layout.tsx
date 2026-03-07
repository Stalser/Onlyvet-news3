import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OnlyVet — Профессиональные онлайн-консультации ветеринарного врача",
  description: "Экспертные ветеринарные консультации для кошек и собак дистанционно. Разбор анализов, второе мнение, сопровождение хронических заболеваний.",
  keywords: "ветеринар онлайн, консультация ветеринара, ветеринарная помощь, кот, собака, анализы животных, второе мнение ветеринара",
  authors: [{ name: "OnlyVet" }],
  openGraph: {
    title: "OnlyVet — Профессиональные онлайн-консультации ветеринарного врача",
    description: "Экспертные ветеринарные консультации для кошек и собак дистанционно",
    type: "website",
    locale: "ru_RU",
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
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
