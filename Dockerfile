FROM node:lts-alpine3.14

WORKDIR /src

RUN apk update && \
    yarn global add create-nuxt-app

ENV HOST 0.0.0.0
EXPOSE 3000