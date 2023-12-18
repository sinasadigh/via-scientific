# Via Scientific Backend README

## Overview

This repository contains the backend for Via Scientific Backend. The backend is built using Node.js and can be run either with Docker or without Docker.

## Prerequisites

Before running the application, make sure you have the following prerequisites installed:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

## Run with Docker

To run the application with Docker, follow these steps:

```bash
# Build Docker images
docker-compose build
# Start Docker containers
docker-compose up
```

If you prefer to run the application without Docker, follow these steps:
1- Create a .env file and set the environment to development:
NODE_ENV=dev

2- Check the config/ directory for any specific configurations.

3- Install dependencies:
npm i

4- Run the seeder script:
node seeder.js

5- Start the application:
npm start


### Additional Information
Make sure to configure any necessary settings in the config/ directory before running the application.

For development purposes, set the environment to dev in the .env file.
