//--COMP3123 Assignmnet 1 -Backend--//
**Project Description**

    this project is a secure RESTful backed API development for COMP3123 usning node.js, express.js, mongod and moongoose.
    the application will provide user auth, JWT authorizaion, employee
    CRUD operations, employee ownership,input validation,security protections,
    logging and health-chdck endpoints

**Technologies Used**
-Node.js, Express.JS,MongoDB,Moongoose
-JavaScript,Nodemon,dotenv, Docker

**Project Setup**
1. Created the project as Node.js.it uses package.json to manage 
    dependencies and npm scripts

2. Express.js was installed as the backend framework = npm i express

3. Nodemon was installed as a development dependency = npm i --save-dev Nodemon
    It automatically restarts the Node.js server when files are changed durinf development.
    development script ="dev": "nodemon server.js"

4.  Server.js is the project entry file.Express app is intialized using 
    const express = require('express');

5.health check up endpoint was creted = GET/health
    the endpoint returns HTTP status 200 and confirms that the srever is running

6.  .gitignore file was created to preventsensitive/unnecessary files from committed to Github
        node_modules,env,logs are ignored

7. Mongoose was installed to allow the Node.js application to communicate
    with MongoDb (npm i mongoose). it will be used to create user and employee schemas and modes

8. MongoDb is being run locally using Docker.(docker run -d --name comp3123-mongodb -p 27017:27017 mongo)

9.dotenv was installed to load environmnet variables fro .env file.(npm install dotenv)

10. a datbase configuration file was created: congig/db.js. uses moongose to connect the application to MongoDB

11. under user.js imported moongoose and defined a schema for a user
