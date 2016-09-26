FROM mag3io/node

RUN mkdir src
WORKDIR src
COPY src .

RUN npm install

EXPOSE 3000

CMD ["app/index.js"]
