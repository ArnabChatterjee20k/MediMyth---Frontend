FROM node:18 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
# copying all the contents to workdir
COPY . .
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT [ "nginx","-g","daemon off;" ]