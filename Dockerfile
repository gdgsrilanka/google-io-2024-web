FROM node:18-alpine

ARG NEXT_PUBLIC_SPEAKERS_API_URL

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start" ]