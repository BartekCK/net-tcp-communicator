FROM node as build
WORKDIR /app
COPY src src
COPY package.json .
COPY tsconfig.json .
RUN npm i
RUN npm run build

FROM node
WORKDIR /app
COPY --from=build /app/build/ ./src
ADD package.json .
RUN npm i --only=production
EXPOSE 8080
CMD ["node", "src/server.js"]
