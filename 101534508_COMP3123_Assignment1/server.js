// server.js needs to load the environment variables before any code tries to use them
require('dotenv').config(); //loads the .env fiel

//connecting to db
const connectDB = require('/config/db');
connectDB(); //calling the fun



//imported express
//express is a function provided by the express package
//when we call express() -express creates an application obj
const express = require('express');
const http = require('http');

//application obj is stored in app
//initialize express applicstion
//this fun creates my express app and stores it in a variable 
//called app
const app = express();




//define server port
const SERVER_PORT = 3000;

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
