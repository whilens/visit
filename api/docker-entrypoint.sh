#!/bin/sh
set -e
npx prisma migrate deploy
node dist/seed.js || echo "seed skipped"
exec node dist/src/main.js
