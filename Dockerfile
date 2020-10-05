FROM node:12.18.4-alpine3.11

WORKDIR /app

COPY . .

RUN npm i && npm run build:dll && npm run build

EXPOSE 5000

CMD ["npm","start"]