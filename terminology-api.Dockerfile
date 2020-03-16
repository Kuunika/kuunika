FROM node:10-alpine
WORKDIR /usr/src/app
COPY ./dist/apps/terminology-api .
COPY package*.json ./
COPY .env .
RUN npm install --only=prod
EXPOSE 3333
CMD ["node", "main.js"]