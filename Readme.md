# Setup

## Run test in Docker container

1. Run below command

`docker run -it --rm --name playwright-container -v "$(pwd):/app" mcr.microsoft.com/playwright:v1.44.1-jammy`

2. Navigate to `app` folder and execute npm commands

## docker-compose

` docker-compose -f docker-compose.yml up`
