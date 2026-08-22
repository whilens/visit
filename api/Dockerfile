FROM node:22-alpine AS build
WORKDIR /app
RUN apk add --no-cache openssl libc6-compat
COPY package*.json ./
COPY prisma ./prisma
RUN npm install --legacy-peer-deps
COPY . .
RUN npx prisma generate && npm run build \
  && npx tsc prisma/seed.ts --outDir /tmp/seedbuild --module CommonJS --esModuleInterop --skipLibCheck --target ES2022 \
  && cp /tmp/seedbuild/seed.js dist/seed.js

FROM node:22-alpine
WORKDIR /app
RUN apk add --no-cache openssl libc6-compat
ENV NODE_ENV=production
COPY package*.json ./
COPY prisma ./prisma
COPY docker-entrypoint.sh ./docker-entrypoint.sh
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
RUN sed -i 's/\r$//' docker-entrypoint.sh && chmod +x docker-entrypoint.sh
EXPOSE 4000
CMD ["./docker-entrypoint.sh"]
