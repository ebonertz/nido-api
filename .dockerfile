FROM node:lts-alpine

Set working directory
WORKDIR /app

Add 
/app/node_modules/.bin
to $PATH
ENV PATH /app/node_modules/.bin:$PATH

Install app dependencies
COPY package.json ./COPY package-lock.json ./RUN npm install --only=production

Bundle app source
COPY . .

EXPOSE 3000CMD [ "npm", "start" ]
