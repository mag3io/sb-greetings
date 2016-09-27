FROM mag3io/node

COPY package.json .
COPY node_modules .
COPY app .

RUN npm prune --production

EXPOSE 3000

CMD ["app/index.js start"]
