FROM mag3io/node

COPY package.json .

RUN mkdir node_modules
COPY node_modules node_modules
RUN npm prune --production

COPY app .

EXPOSE 3000

CMD ["index.js", "start"]
