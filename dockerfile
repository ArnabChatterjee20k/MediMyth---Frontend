# using docker multistage build
# stage1
FROM node:18 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
# copying all the contents to workdir
COPY . .
RUN npm run build

# stage2
FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# copying static files from stage1 to nginx directory
COPY --from=builder /app/dist .
RUN pwd
RUN ls
# copy ythe nginx configuration file
# since our work directory is app inside the docker image so we are doing /app/nginx.conf instead of nginx.conf as it is in the local system
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx","-g","daemon off;" ]