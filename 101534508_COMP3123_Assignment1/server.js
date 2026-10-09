// server.js needs to load the environment variables before any code tries to use them
require('dotenv').config(); //loads the .env fiel

//connecting to db
const connectDB = require('./config/db');
connectDB(); //calling the fun



//imported express
//express is a function provided by the express package
//when we call express() -express creates an application obj
const express = require('express');
const http = require('http');

//define server port
const SERVER_PORT = 3000;

//importing Mongoose User model
//it will let us create and save new user documents in MongoDb
const User = require('./models/user'); //go up one folder


//application obj is stored in app
//initialize express applicstion
//this fun creates my express app and stores it in a variable 
//called app
const app = express();

app.use(express.json());//middleware -allows express to read JSON data sent in request

//defining an endpoint
app.post('/api/v1/user/signup',async(req,res) =>{
    try{
        const user = new User(req.body); //reads the submitted json
        await user.save();

        res.status(201).send('User registered successfully'); //returns the success status
    }catch(error){
        res.status(400).send('Signup failed');
        
    }
});


//will check if the backend server is running
//someone sends GET/health->expressfinds this route->
//function runs->HTTP ststus =200->Response=OK
app.get('/health',(req,res)=>{
    res.status(200).send('OK');
});


//define a route for the root URK
//here '/' means path
app.get('/',(req, res) => {
    res.send("Server is Running");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost: ${SERVER_PORT}/`)
});
