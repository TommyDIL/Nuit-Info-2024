FROM node:alpine

WORKDIR /app

#COPY package*.json ./

COPY . .

RUN npm install -g svelte@latest

RUN npm i -D @sveltejs/adapter-node

RUN npm install

RUN npm run build

#EXPOSE 5137

#CMD ["npm", "run", "dev", "--host", "0.0.0.0"]

EXPOSE 3000

#USER node:node

CMD ["node", "build"]