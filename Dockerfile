FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json .
RUN npm i -f
COPY . .
RUN npm run build

FROM node:22-alpine AS prodapp
WORKDIR /app
ENV PORT=3000
EXPOSE 3000
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY package.json .
CMD ["npm", "start"]
