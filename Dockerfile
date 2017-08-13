# base image
FROM alpine:3.5

# install OS packages
RUN apk add --update nodejs

# copy dist dir
ADD ./dist /app/dist

# copy server dir
ADD ./server /app/server

# install app server packages
WORKDIR /app/server
RUN npm install

# expose port
EXPOSE 10084

# run command on start
CMD ["node", "app.js"]
