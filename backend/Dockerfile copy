FROM node:latest

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3050

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret

CMD ["npm", "start"]