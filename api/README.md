# API визитки

NestJS + GraphQL + Prisma. Общий запуск и деплой описаны в корневом [README](../README.md).

```bash
cp .env.example .env
npx prisma generate
npx prisma migrate deploy
npm run prisma:seed
npm run start:dev
```

GraphQL: http://localhost:4000/graphql
