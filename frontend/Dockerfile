FROM node:latest

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 2000

CMD ["npm", "run", "serve"]