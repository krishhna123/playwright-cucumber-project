FROM mcr.microsoft.com/playwright:v1.44.1-jammy

WORKDIR /app

COPY . /app

RUN apt-get update && \
npm install

CMD ["npm", "run", "test"]