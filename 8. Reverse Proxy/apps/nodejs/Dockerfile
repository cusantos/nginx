FROM node:lts-alpine3.12

MAINTAINER Charlie Santos

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

CMD ["npm", "run", "deploy"]

