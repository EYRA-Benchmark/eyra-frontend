FROM node:carbon-alpine as builder

RUN apk --no-cache add ca-certificates
RUN npm install -g yarn
WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

RUN yarn build
CMD ["yarn", "start:production"]

#FROM nginx:stable-alpine
#RUN apk --no-cache add ca-certificates
#WORKDIR /app
#COPY --from=builder /app/build .
#COPY docker/nginx.conf /etc/nginx/nginx.conf
#COPY docker/env.json.template ./env.json.template
#COPY docker/run.sh /run.sh
#RUN chmod a+x /run.sh
#
#RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
#
#CMD /run.sh
