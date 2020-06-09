FROM node:lts-alpine3.12

MAINTAINER Charlie Santos

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "deploy"]

