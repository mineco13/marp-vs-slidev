FROM oven/bun
WORKDIR /app

ARG GIT_REMOTE
ARG GIT_BRANCH
ENV SLIDES_DIR=/app/.out

COPY package.json ./
COPY next/package.json next/
COPY marp/package.json marp/
COPY slidev/package.json slidev/
RUN bun install

COPY . .
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "--cwd", "next", "start"]
