FROM node:20-alpine

RUN apk add --no-cache python3 make g++ libc6-compat

WORKDIR /app

ENV NODE_ENV=production

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy source code
COPY . .

EXPOSE 42069
ENV DATABASE_SCHEMA=derolas_subgraph

CMD ["npm", "run", "start"]
