# syntax=docker/dockerfile:1

# Page Build
FROM docker.io/library/node:26-alpine AS nodebuilder

WORKDIR /app

COPY . ./

RUN rm -rf ./.nuxt/ && \
    apk add --no-cache git && \
    npm install -g corepack && \
    corepack enable && \
    corepack install && \
    pnpm install --frozen-lockfile && \
    pnpm run generate

# Final Image
FROM docker.io/nginxinc/nginx-unprivileged:1.27.3-alpine3.20

COPY --from=nodebuilder /app/.output/public/ /usr/share/nginx/html

EXPOSE 8080/tcp
