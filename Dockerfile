# Stage 1 — build stage (root, with dev deps)
FROM node:22-alpine@sha256:1b2479dd35a99687d6638f5976fd235e26c5b37e8122f786fcd5fe231d63de5b AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# If you have a build step, uncomment:
# RUN npm run build

# Stage 2 — runtime (non-root, prod deps only)
FROM node:22-alpine@sha256:1b2479dd35a99687d6638f5976fd235e26c5b37e8122f786fcd5fe231d63de5b AS runtime

USER node
WORKDIR /app


COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev

# Copy only necessary runtime artifacts
COPY --chown=node:node --from=build /app ./

ENV NODE_ENV=production
ENV DATABASE_SCHEMA=derolas_subgraph

EXPOSE 42069
CMD ["npm", "run", "start"]
