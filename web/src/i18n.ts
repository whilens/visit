import type { Locale } from './types';

export const ui = {
  ru: {
    card: 'Цифровая визитка',
    available: 'Открыт к предложениям',
    years: 'года опыта',
    about: 'О себе',
    skills: 'Стек',
    projects: 'Проекты',
    experience: 'Опыт',
    education: 'Образование',
    telegram: 'Telegram',
    email: 'Почта',
    github: 'GitHub',
    open: 'Открыть',
    private: 'без публичной ссылки',
    loadError: 'Не удалось загрузить визитку. Поднимите API и обновите страницу.',
    retry: 'Ещё раз',
    built: 'NestJS · Prisma · GraphQL · Docker',
  },
  en: {
    card: 'Digital business card',
    available: 'Open to work',
    years: 'years of experience',
    about: 'About',
    skills: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    telegram: 'Telegram',
    email: 'Email',
    github: 'GitHub',
    open: 'Open',
    private: 'no public link',
    loadError: 'Could not load the card. Start the API and refresh.',
    retry: 'Retry',
    built: 'NestJS · Prisma · GraphQL · Docker',
  },
};

export type Ui = (typeof ui)['ru'];

export function pick<T>(locale: Locale, ru: T, en: T) {
  return locale === 'en' ? en : ru;
}
