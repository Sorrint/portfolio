FROM node:18-alpine as client

WORKDIR /portfolio

COPY *.json /portfolio/

RUN npm install --no-update-notifier
COPY . /portfolio/

EXPOSE 5000

CMD [ "npm", "run", "build" ]

