FROM node:16-slim

WORKDIR /app

COPY /server/package*.json ./

RUN npx yarn install

COPY /server ./

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npm", "start"]