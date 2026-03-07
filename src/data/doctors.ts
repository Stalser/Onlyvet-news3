// data/doctors.ts

export type DoctorSpecialization =
  | "эксперт"
  | "терапия"
  | "диагностика"
  | "онкология";

export type Doctor = {
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
};

export const doctors: Doctor[] = [
  {
    id: "elvin",
    initials: "АК",
    name: "Курилов Андрей Степанович",
    role: "Эксперт по сложным случаям, онкология",
    specialization: "эксперт",
    servicesShort: "Сложные и неясные случаи, онкологические пациенты, выбор тактики лечения.",
    servicesFull: [
      "Онкологические пациенты с несколькими сопутствующими диагнозами.",
      "Выбор тактики при противоречивых заключениях разных клиник.",
      "Длительное ведение хронических пациентов с частыми обострениями.",
    ],
    tags: ["Онкология", "Сложные случаи", "Консилиум"],
    experienceLabel: "Опыт > 10 лет",
    imageUrl: "/images/doctors/elvin.svg",
    patientsCount: "500+",
    reviewsCount: "120+",
  },
  {
    id: "diana",
    initials: "ДЧ",
    name: "Диана Чемерилова",
    role: "Терапия кошек и собак, второе мнение",
    specialization: "терапия",
    servicesShort: "Терапия, коррекция назначений при хронике, второе мнение по диагнозам.",
    servicesFull: [
      "Коррекция уже назначенных схем лечения при сомнениях владельца.",
      "Ведение пациентов с хроническими дерматологическими и гастроэнтерологическими проблемами.",
      "Разбор терапевтических диагнозов и рекомендации по дообследованию.",
    ],
    tags: ["Терапия", "Кошки и собаки", "Второе мнение"],
    experienceLabel: "Опыт 3+ года в клинической практике",
    imageUrl: "/images/doctors/diana.svg",
    patientsCount: "300+",
    reviewsCount: "85+",
  },
  {
    id: "oleg",
    initials: "ОИ",
    name: "Иванов Олег Сергеевич",
    role: "Диагностика: УЗИ и анализы",
    specialization: "диагностика",
    servicesShort: "Интерпретация лабораторных анализов и УЗИ, контроль динамики на фоне лечения.",
    servicesFull: [
      "Разбор сложных лабораторных профилей (биохимия, общий анализ крови).",
      "Сопоставление УЗИ с клинической картиной и планом лечения.",
      "Контроль динамики при терапии хронических заболеваний.",
    ],
    tags: ["Анализы", "УЗИ", "Контроль динамики"],
    experienceLabel: "Фокус на диагностике и работе с данными",
    imageUrl: "/images/doctors/oleg.svg",
    patientsCount: "400+",
    reviewsCount: "95+",
  },
  {
    id: "maria",
    initials: "МФ",
    name: "Федосова Мария Александровна",
    role: "Терапия, дерматология, второе мнение",
    specialization: "терапия",
    servicesShort: "Терапия, дерматологические проблемы, аллергические реакции у животных.",
    servicesFull: [
      "Диагностика и лечение кожных заболеваний.",
      "Лечение аллергических реакций и подбор гипоаллергенных диет.",
      "Ведение пациентов с хроническими заболеваниями.",
    ],
    tags: ["Дерматология", "Аллергология", "Терапия"],
    experienceLabel: "Опыт 5+ лет в ветеринарии",
    imageUrl: "/images/doctors/maria.svg",
    patientsCount: "350+",
    reviewsCount: "110+",
  },
];
