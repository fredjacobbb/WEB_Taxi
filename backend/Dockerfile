FROM node:22-bullseye

COPY *package.json ./

RUN npm install -g npm-check-updates

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]