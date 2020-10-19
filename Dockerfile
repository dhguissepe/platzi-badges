FROM node:12.18.4-alpine3.11

WORKDIR /app

COPY . .

RUN npm ci && npm run build:dll && npm run build && npm prune --production

EXPOSE 5000

CMD ["npm","start"]