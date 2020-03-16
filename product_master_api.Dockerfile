FROM node:10-alpine
WORKDIR /usr/src/app
COPY ./dist/apps/product-master-api .
COPY package*.json ./
COPY .env .
EXPOSE 3333
RUN npm install --only=prod
CMD ["node", "main.js"]