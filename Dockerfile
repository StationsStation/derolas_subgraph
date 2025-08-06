FROM node:24-alpine3.22@sha256:e8e882c692a08878d55ec8ff6c5a4a71b3edca25eda0af4406e2a160d8a93cf2
USER node
ENV NODE_ENV=production
ENV DATABASE_SCHEMA=derolas_subgraph
EXPOSE 42069
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev
COPY --chown=node:node . .
CMD ["npm", "run", "start"]
