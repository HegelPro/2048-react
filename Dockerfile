FROM node:14
COPY . ./
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 8080
CMD [ "serve", "-s", "build" ]
 