FROM mag3io/node-docker-auto

RUN mkdir src
WORKDIR src
COPY src .

RUN npm install

EXPOSE 3000

CMD ["index.js"]
