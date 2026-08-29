import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Артём Герасимов',
      nameEn: 'Artem Gerasimov',
      role: 'Fullstack Middle · TypeScript / backend',
      roleEn: 'Fullstack Middle · TypeScript / backend',
      tagline:
        'Собираю живые продукты на TypeScript: API, интеграции, деплой на VPS — и интерфейс, которым пользуются люди.',
      taglineEn:
        'I ship live TypeScript products: APIs, integrations, VPS deploys — and interfaces people actually use.',
      bio: '1,8 года строю сервисы целиком, с уклоном в backend. Доводил платформу единоборств SMA до сторов и 300+ активных пользователей: платежи, ЭЦП, чат, роли, инфраструктура. Параллельно собрал магазин с LLM-ассистентом, который смотрит в остатки, а не фантазирует витрину.',
      bioEn:
        'For 1.8 years I have been shipping full services, with a backend lean. I took the SMA combat-sports platform to the stores and 300+ active users: payments, e-signatures, chat, roles, infra. I also built a shop whose LLM assistant checks inventory instead of inventing the shelf.',
      email: 'artem.ger134@gmail.com',
      telegram: 'https://t.me/success_player',
      github: null,
      photoUrl: '/photo.jpg',
      education:
        'СибАДИ · Информатика и вычислительная техника',
      educationEn:
        'SibADI · Informatics and Computer Engineering',
      yearsExperience: 1.8,
    },
  });

  await prisma.skill.createMany({
    data: [
      { name: 'TypeScript', category: 'Языки', categoryEn: 'Languages', level: 5, sort: 1 },
      { name: 'JavaScript', category: 'Языки', categoryEn: 'Languages', level: 5, sort: 2 },
      { name: 'SQL', category: 'Языки', categoryEn: 'Languages', level: 4, sort: 3 },
      { name: 'Node.js', category: 'Backend', categoryEn: 'Backend', level: 5, sort: 10 },
      { name: 'NestJS', category: 'Backend', categoryEn: 'Backend', level: 4, sort: 11 },
      { name: 'GraphQL', category: 'Backend', categoryEn: 'Backend', level: 4, sort: 12 },
      { name: 'Prisma', category: 'Backend', categoryEn: 'Backend', level: 4, sort: 13 },
      { name: 'REST', category: 'Backend', categoryEn: 'Backend', level: 4, sort: 14 },
      { name: 'WebSocket', category: 'Backend', categoryEn: 'Backend', level: 4, sort: 15 },
      { name: 'JWT / SMS auth', category: 'Backend', categoryEn: 'Backend', level: 4, sort: 16 },
      { name: 'React', category: 'Frontend', categoryEn: 'Frontend', level: 4, sort: 20 },
      { name: 'React 19', category: 'Frontend', categoryEn: 'Frontend', level: 4, sort: 21 },
      { name: 'Docker', category: 'Infra', categoryEn: 'Infra', level: 4, sort: 30 },
      { name: 'Docker Compose', category: 'Infra', categoryEn: 'Infra', level: 4, sort: 31 },
      { name: 'Nginx / Apache', category: 'Infra', categoryEn: 'Infra', level: 4, sort: 32 },
      { name: 'Ubuntu VPS', category: 'Infra', categoryEn: 'Infra', level: 4, sort: 33 },
      { name: 'CI/CD', category: 'Infra', categoryEn: 'Infra', level: 4, sort: 34 },
      { name: "Let's Encrypt", category: 'Infra', categoryEn: 'Infra', level: 4, sort: 35 },
      { name: 'T-Bank API', category: 'Интеграции', categoryEn: 'Integrations', level: 4, sort: 40 },
      { name: 'Yandex OCR', category: 'Интеграции', categoryEn: 'Integrations', level: 3, sort: 41 },
      { name: 'ЭЦП / Oki-Doki', category: 'Интеграции', categoryEn: 'Integrations', level: 3, sort: 42 },
      { name: 'LLM-ассистенты', category: 'Интеграции', categoryEn: 'Integrations', level: 3, sort: 43 },
    ],
  });

  await prisma.project.createMany({
    data: [
      {
        title: 'SMA Team',
        titleEn: 'SMA Team',
        summary:
          'Платформа для мира единоборств: бойцы, менеджеры, промоутеры и матчмейкеры в одном контуре. Контракты, документы, безопасные сделки и чат — не презентация, а живой продукт в сторах.',
        summaryEn:
          'A platform for combat sports: fighters, managers, promoters and matchmakers in one loop. Contracts, documents, escrow-style deals and chat — a live product in the stores, not a slide deck.',
        url: 'https://m.sma.team',
        highlights: [
          'Full-stack на React 19 и Node.js, клиент в Google Play и RuStore, 300+ активных пользователей',
          'JWT с SMS, защита от DDoS и спама, ролевая модель на 5 ролей и админка',
          'Т-Банк, Yandex OCR, ЭЦП Oki-Doki, WebSocket-чат с обменом контрактами, PDF на почту',
          'VPS Ubuntu: Nginx, Apache, Let’s Encrypt, CI/CD на Docker Compose, загрузка быстрее на 15–20%',
        ],
        highlightsEn: [
          'Full-stack React 19 + Node.js, shipped to Google Play and RuStore, 300+ active users',
          'JWT with SMS, DDoS/spam protection, 5-role access model and an admin console',
          'T-Bank, Yandex OCR, Oki-Doki e-sign, WebSocket chat with contract exchange, PDF via email',
          'Ubuntu VPS: Nginx, Apache, Let’s Encrypt, Docker Compose CI/CD, 15–20% faster load',
        ],
        stack: [
          'TypeScript',
          'React 19',
          'Node.js',
          'Docker',
          'Nginx',
          'JWT',
          'WebSocket',
        ],
        sort: 1,
      },
      {
        title: 'Магазин с LLM-ассистентом',
        titleEn: 'Shop with an LLM assistant',
        summary:
          'Интернет-магазин, в котором чат-бот на LLM отвечает по товарам и смотрит в складские остатки: не предлагает то, чего нет, и ведёт консультацию внутри каталога.',
        summaryEn:
          'An online shop whose LLM chatbot answers from the catalog and checks stock: it will not sell thin air, and the consult stays inside the store.',
        url: null,
        highlights: [
          'Помощник на LLM учитывает остатки, а не только карточку товара',
          'Сценарий «спросить → понять наличие → помочь выбрать» в одном контуре',
          'Backend на TypeScript / Node.js',
        ],
        highlightsEn: [
          'The LLM assistant factors in inventory, not just the product card',
          'Ask → check stock → help choose, in one flow',
          'Backend in TypeScript / Node.js',
        ],
        stack: ['TypeScript', 'Node.js', 'LLM'],
        sort: 2,
      },
    ],
  });

  await prisma.experience.create({
    data: {
      company: 'SMA',
      companyEn: 'SMA',
      role: 'Fullstack-разработчик',
      roleEn: 'Fullstack Developer',
      period: '2024 — н.в.',
      periodEn: '2024 — present',
      items: [
        'Спроектировал и собрал full-stack платформу (React 19 + Node.js), вывел в Google Play и RuStore',
        'Поднял прод на VPS Ubuntu: Apache, Nginx, Let’s Encrypt, CI/CD на Docker Compose',
        'Собрал авторизацию JWT + SMS, антиспам и ролевую модель на 5 ролей с админкой',
        'Интегрировал Т-Банк, Yandex OCR, ЭЦП Oki-Doki, чат на WebSocket и генерацию PDF с отправкой на почту',
        'Перевёл фронтенд на TypeScript и ускорил загрузку на 15–20%',
        'Каждую неделю синхронизировал планы и презентовал результат команде',
      ],
      itemsEn: [
        'Designed and built the full-stack platform (React 19 + Node.js) and shipped it to Google Play and RuStore',
        'Brought production up on an Ubuntu VPS: Apache, Nginx, Let’s Encrypt, Docker Compose CI/CD',
        'Implemented JWT + SMS auth, anti-spam and a 5-role model with an admin panel',
        'Integrated T-Bank, Yandex OCR, Oki-Doki e-sign, WebSocket chat and PDF emails',
        'Migrated the frontend to TypeScript and cut load time by 15–20%',
        'Joined weekly syncs and presented delivery to the team',
      ],
      sort: 1,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
