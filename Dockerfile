FROM node:22-alpine@sha256:1b2479dd35a99687d6638f5976fd235e26c5b37e8122f786fcd5fe231d63de5b

USER node
WORKDIR /app

COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev

COPY --chown=node:node . .

ENV NODE_ENV=production
ENV DATABASE_SCHEMA=derolas_subgraph

EXPOSE 42069
CMD ["npm", "run", "start"]
