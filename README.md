# Template of nodeJS API with Typescript



## Pre conditions - Run locally

- You must have installed [NodeJS](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) 
- You must have a mongoDB instance on port 27017

## Pre conditions - Run via Docker

- You must have installed [Docker](https://docs.docker.com/desktop/) and [docker-compose](https://docs.docker.com/compose/install/)


## Run the Application - Locally

- Download the source files in your local machine
- Open the command prompt in the folder 
- Run the yarn scripts below (don't run the lines starting with '#')
``` 
# Download the dependencies(you only have to run it for the first time)
yarn install

# Run the application
yarn dev
```

Then, the API will be listen at port 3000


## Run the Application - Via Docker
- Download the source files in your local machine
- Open the command prompt in the folder 
- Run the scripts below (don't run the lines starting with '#')
````
docker-compose up
```

Then, the API will be listen at port 3000

### Creating a mongo instance locally
- Download [Docker](https://www.docker.com/products/docker-desktop/)
- Create and account in docker/dockerhub
- Initiate docker in you machine
- Run the commando below to instantiate the mongoDB
```
# Download the mongo image and run it locally on port 27017
docker run -d -p 2715:27017 -v ~/mongo-db-folder:/data/db --name mymongo mongo:latest
```
- Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass) to perform queries











