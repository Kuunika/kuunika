FROM node:10-alpine as building
RUN mkdir html
WORKDIR /html
COPY ./dist/apps/terminology-client .
COPY package*.json ./
RUN npm install --only=prod

FROM nginx:alpine
COPY --from=building /html/ /usr/share/nginx/html/
EXPOSE 80