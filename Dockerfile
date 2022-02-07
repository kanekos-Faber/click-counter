FROM node:lts-alpine3.14

RUN apk update && \
    yarn global add create-nuxt-app && \
    yarn global add --save express-session

ENV HOST 0.0.0.0
EXPOSE 3000