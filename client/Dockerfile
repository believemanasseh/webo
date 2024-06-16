FROM node:20.14.0-alpine as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist/client /usr/share/nginx/html/

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
