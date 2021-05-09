# MERN Application Boilerplate

A standardized, organized and production-ready foundation for building your awesome MERN application with popular technology stack.

M - MongoDB
E - Express
R - Reactjs
N - Nodejs

## Features

The following technology stack is used in this project:
* Docker  - Containerize solution for development and deployment
* MongoDB - NoSQL for persistent data
* Express - Web server for handlering requests
* Reactjs - Frontend development
* Nodejs  - Cross-platform JavaScript run-time environment
* SSR  	  - Server-side rendering

## How To
1. Initial your project by `npm run init`
2. Run your application in 
	* development mode `docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build`
	* production mode `docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build`

### Production Release Strategy
Before production release, please ensure your has replaced your dockerhub username and repository for the image correctly in docker-compose.yaml.

1. Build image
`docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build [services]`
2. Push image to docker repository
`docker-compose -f docker-compose.yaml -f docker-compose.prod.ymal push [services]`
3. Pull the latest image to your productionserver
`docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml pull [services]`
4. Recreate container
`docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d [services]`