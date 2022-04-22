FROM node:lts-slim

LABEL owner="Shivam Singh"

ENV NODE_ENV="production"

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]
