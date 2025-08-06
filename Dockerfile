FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

RUN chown -R node:node /app

USER node

ENV NODE_ENV=production
ENV DATABASE_SCHEMA=derolas_subgraph

EXPOSE 42069

CMD ["npm", "run", "start"]
