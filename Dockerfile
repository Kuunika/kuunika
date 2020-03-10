FROM node:10
WORKDIR /usr/src/app
COPY ./dist/apps/terminology-api .
COPY package*.json ./
COPY .env .
RUN npm install --only=prod
CMD ["node", "main.js"]