# Цифровая визитка

NestJS, GraphQL, Prisma, React, Docker. Данные из PostgreSQL, один запрос `card`.

```bash
docker compose up --build
```

- сайт: http://localhost:8080
- GraphQL: http://localhost:4000/graphql

Тексты — `api/prisma/seed.ts`, фото — `web/public/photo.jpg`.

На VPS: `docker compose up --build -d`, Nginx на `127.0.0.1:8080`, Let’s Encrypt.
