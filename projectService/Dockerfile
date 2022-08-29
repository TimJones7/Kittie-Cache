FROM node:latest

#RUN npm install -g pm2

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start1"]
