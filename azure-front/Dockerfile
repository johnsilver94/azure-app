FROM node:12.18.1-alpine3.9 AS builder
WORKDIR /app
EXPOSE 4200
ENV ASPNETCORE_URLS=http://*:5000

COPY azure-front/package.json .
RUN npm install

COPY /azure-front .
RUN npm run build --prod

FROM nginx:1.19.0-alpine
COPY /azure-front/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/azure-front /usr/share/nginx/html
