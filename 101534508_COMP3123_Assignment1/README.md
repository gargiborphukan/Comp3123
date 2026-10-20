//--COMP3123 Assignmnet 1 -Secure Employee Management REST API--//

Student: Gargi
ID : 101534508
Course: COMP 3123 - Backend Development
Assignment: Assignment 1 - Secure Employee Management REST API
**Project Description**

    this project is a secure RESTful backed API development for COMP3123 usning node.js, express.js, mongod and moongoose.
    the application will provide user auth, JWT authorizaion, employee
    CRUD operations, employee ownership,input validation,security protections,
    logging and health-chdck endpoints

**Technologies Used**
-Node.js, Express.JS,MongoDB,Moongoose
-JavaScript,Nodemon,dotenv, Docker, Helmet for HTTP security headers
JSON web token(JWT), Postman for API testing

**Features**
-User signup amd login
-Secure password hashing
-JWT based auth
-Employee CRUD operations
-User to Employee database relationships
-Authorization and employee ownership enforcement
-Request validation and error handling
-security headers and rate limiting
-Application logging
-Health-check endpoint


**Project Setup**
101534508_COMP3123_Assignment1/
|-config/
|   \-db.js
|-controllers/
|    \-employeecontrollers.js
|   \-login.js
|   \-usercontollers.js
|-middleware
|   \-auth.js
|-models
|   \-employee.js
|   \-user.js
|-postman
|-routes
|  \-employee.js
|  \-user.js
|-.env
|-.env.example
|-.gitgnore
|-pacakage-lock.json
|-pacakage.json
|-README.md
|-server.js

**Prerequisites**
Before running the application , install or configure:
-Node.js and npm
-Docker Desktop
-Git
-Postman

**Installation*8

1.	Clone the repository
-git clone<my_repo_URL> and use the cmd in  the terminal in the current working directory

2. Created the project as Node.js.it uses package.json to manage 
    dependencies and npm scripts

3. Express.js was installed as the backend framework = npm i express

4. Nodemon was installed as a development dependency = npm i --save-dev Nodemon
    It automatically restarts the Node.js server when files are changed durinf development.
    development script ="dev": "nodemon server.js"

5.  Server.js is the project entry file.Express app is intialized using 
    const express = require('express');

6.health check up endpoint was creted = GET/health
    the endpoint returns HTTP status 200 and confirms that the srever is running

7.  .gitignore file was created to preventsensitive/unnecessary files from committed to Github
        node_modules,env,logs are ignored

8. Mongoose was installed to allow the Node.js application to communicate
    with MongoDb (npm i mongoose). it will be used to create user and employee schemas and modes

9. MongoDb is being run locally using Docker.(docker run -d --name comp3123-mongodb -p 27017:27017 mongo)

10.dotenv was installed to load environmnet variables fro .env file.(npm install dotenv)

12. a datbase configuration file was created: congig/db.js. uses moongose to connect the application to MongoDB

13. under user.js imported moongoose and defined a schema for a user

14. installed bcrypt.hash() - hashes the test password was added to the user model

15. middleware directory was created which runs between receiving an HTTP request and sending it to the route controller.When a user tries to retrieve employee records, middleware checks whether the user has a valid JWT before allowing the request to continue.

16.Added const jwt = require('jsonwebtoken') which lets our application to create, sign and verify JWT tokens at the start of USERand LOGIN COntrollers along with AUTH/MIDLLEWARE file -
-User controller = creates a token  when a user successfully logs in using jwt.sign(){under POST LOGIN line 128}