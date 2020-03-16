FROM node:10-alpine
WORKDIR /usr/src/app
COPY ./dist/apps/product-master-redis .
COPY package*.json ./
COPY .env .
RUN npm install --only=prod
CMD ["node", "main.js"]