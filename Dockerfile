FROM node:16 as client

WORKDIR /portfolio

COPY *.json /portfolio/

RUN npm install -g npm@9.7.2
RUN npm install
COPY . /portfolio/

EXPOSE 5000

CMD [ "npm", "run", "build" ]

