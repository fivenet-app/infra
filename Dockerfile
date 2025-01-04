# syntax=docker/dockerfile:1

# Page Build
FROM docker.io/library/node:22.12.0-alpine3.20 AS nodebuilder
ARG NUXT_UI_PRO_LICENSE
WORKDIR /app
COPY . ./
RUN rm -rf ./.nuxt/ && \
    apk add --no-cache git && \
    corepack enable && \
    corepack prepare pnpm@latest --activate && \
    pnpm install && \
    NUXT_UI_PRO_LICENSE=${NUXT_UI_PRO_LICENSE} pnpm generate

# Final Image
FROM docker.io/nginxinc/nginx-unprivileged:1.27.3-alpine3.20
COPY --from=nodebuilder /app/.output/public /usr/share/nginx/html

EXPOSE 8080/tcp
