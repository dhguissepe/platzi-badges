FROM node:12.18.4-alpine3.11

WORKDIR /app

COPY . .

RUN npm i --loglevel=error && npm run build:dll && npm run build && rm -rf node_modules && cd ./server/ && npm i --loglevel=error

EXPOSE 5000

CMD ["npm","start"]