FROM node:18.18.2

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend .

CMD ["npm", "start"]
