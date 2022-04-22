# Template of nodeJS API with Typescript
This is a template of an API that provides some resources:
 
 ## API resources
 ### Authentication and Login
 - POST /registry: create an account
 ```
 {
     "name": "Vitor Fariaz"
     "nickName": "vitorfariaz",
     "email": "vitorfariaz@outlook.com",
     "password": "blablabla",
 }
```
- POST /login: login
```
{
    "nickname": "vitorfariaz",
    "password": "blablabla"
}
```

### Interaction with pets 

 - GET  /pets?breed=chiuaua?age=2: find all pets
 - POST /pets: create a pet

```
request-body:
{
    "name":"Bob",
    "age": 12,
    "type": "DOG",
    "breed": "CHIUAUA",
    "sex": "MALE",
}
```
 - PUT /pets: update a pet
 - DELETE /pets/{id}: delete a pet by id

Rules:
 - You have to Login to see others pets
 - You only could update or delete your pets
 - You only could have 5 pets created
 - You could not create a pet with the same name and type

## Run the Application - Via Docker (suggested)

Pre conditions
- You must have installed [Docker](https://docs.docker.com/desktop/) and [docker-compose](https://docs.docker.com/compose/install/)


Steps
- Download the source files in your local machine
- Open the command prompt in the folder 
- Run the script below
```
docker-compose up
```
Then, the API will be listen at port 3000 and a mongo instance on port 2717

## Run the Application - Locally (Not recommended)

Pre conditions
- You must have installed [NodeJS](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) 
- You must have a mongoDB instance on port 27017
- You will have to update mongo url in src/app.ts and put `localhost` instead of `mymongo`

### Steps
- Download the source files in your local machine
- Open the command prompt in the folder 
- Run the yarn scripts below (don't run the lines starting with `#`)
``` 
# Download the dependencies(you only have to run it for the first time)
yarn install

# Run the application
yarn dev
```
Then, the API will be listen at port 3000


To create a mongo instance locally
- Download [Docker](https://www.docker.com/products/docker-desktop/)
- Create and account in docker/dockerhub
- Initiate docker in you machine
- Run the command below to instantiate the mongoDB
```
# Download the mongo image and run it locally on port 2717
docker run -d -p 27017:27017 -v mongo-data:/data/db --name mymongo mongo:latest
```

- Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass) to perform queries