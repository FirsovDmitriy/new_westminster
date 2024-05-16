FROM node:20
WORKDIR /app
RUN npm install -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN pnpm run build

EXPOSE 5000
CMD ["serve", "-s", "build", "-l", "5000"]