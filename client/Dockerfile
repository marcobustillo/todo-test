FROM node:16-slim

WORKDIR /app

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "build" ]