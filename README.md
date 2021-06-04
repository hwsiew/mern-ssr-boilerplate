# MERN Application Boilerplate

A standardized, organized and production-ready foundation for building your awesome MERN application with popular technology stack.

M - MongoDB, E - Express, R - Reactjs, N - Nodejs

## Features

The following technology stack is used in this project:
* Docker  - Containerize solution for development and deployment
* MongoDB - NoSQL for persistent data
* Expressjs - Web server for handling requests
* Reactjs - Frontend development
* Nodejs  - Cross-platform JavaScript run-time environment
* SSR  	  - Server-side rendering

## How To

Follow the step below to startup your application quickly.
1. Initial your project by running `npm run init` in your command prompt. This will initialize environment variables use in the application and output a .env file. Note: you may also reinitialize/update environment variables by running the command again.
2. To start containers of your application in
	* development mode `npm run docker:up:dev` or `npm run docker:up:dev -- --build` to build image
	* production mode `npm run docker:up` or `npm run docker:up -- --build` to build image
3. After your application's containers are running, you can access your application via http://localhost:[port]. The default port is 3000, or if you have changed it to other during the initialization.
4. To stop your application `npm run docker:down`.

## Supported Scripts

The following scripts are supported by `npm run <script>`. Some of them are meant to be used in the process of docker container [docker], while others are used to manipulate the environment.
* `init` 	- To initialize environment variables of the application.
* `docker:up` - To start docker containers of your application in production mode.
* `docker:up:dev` - To start docker contianers of your application in development mode.
* `docker:down` - To stop docker containers of your application.
* `start` 	- To start the application in production mode. [docker]
* `dev`		- To start the application in dev mode. [docker]
* `build`   - To build the application for production. [docker]

## Production Release Strategy

Before production release, please ensure your has replaced your dockerhub username and repository for the image correctly in docker-compose.yaml.

1. Build image
`docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build [services]`
2. Push image to docker repository
`docker-compose -f docker-compose.yaml -f docker-compose.prod.ymal push [services]`
3. Pull the latest image to your production server
`docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml pull [services]`
4. Recreate container
`docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d [services]`