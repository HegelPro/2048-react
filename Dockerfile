FROM node:carbon
COPY . ./
RUN npm install
RUN npm run build
RUN npm install -g serve
RUN serve -s build
EXPOSE 5000
CMD [ "serve", "-s build" ]
