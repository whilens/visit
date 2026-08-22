export type Locale = 'ru' | 'en';

export type Profile = {
  id: number;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  tagline: string;
  taglineEn: string;
  bio: string;
  bioEn: string;
  email: string;
  telegram: string;
  github?: string | null;
  photoUrl?: string | null;
  education: string;
  educationEn: string;
  yearsExperience: number;
};

export type Skill = {
  id: number;
  name: string;
  category: string;
  categoryEn: string;
  level: number;
  sort: number;
};

export type Project = {
  id: number;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  url?: string | null;
  highlights: string[];
  highlightsEn: string[];
  stack: string[];
  sort: number;
};

export type Experience = {
  id: number;
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  period: string;
  periodEn: string;
  items: string[];
  itemsEn: string[];
  sort: number;
};

export type CardData = {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
};
