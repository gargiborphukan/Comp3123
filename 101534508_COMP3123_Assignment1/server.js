// server.js needs to load the environment variables before any code tries to use them
require('dotenv').config(); //loads the .env fiel

//imported express
//express is a function provided by the express package
//when we call express() -express creates an application obj
const express = require('express');

//connecting to db
const connectDB = require('./config/db');

//importing the user routs
const userRoutes = require('./routes/user');
//importing the employee routes
const employeeRoutes = require('./routes/employee');

const http = require('http');

//define server port
const SERVER_PORT = process.env.PORT || 3000;  //correcte with AI


//application obj is stored in app
//initialize express applicstion
//this fun creates my express app and stores it in a variable 
//called app
const app = express();

//middleware -allows express to read JSON data sent in request
app.use(express.json());

//middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));


//will check if the backend server is running
//someone sends GET/health->expressfinds this route->
//function runs->HTTP ststus =200->Response=OK
app.get('/health',(req,res)=>{
    res.status(200).json({
        status  : 'ok',
        message : 'Server is running'
   });
});

//define a route for the root URK
//here '/' means path
app.get('/',(req, res) => {
    res.send("<h1>Welcome to Comp 3123 Employee Management API</h1>");
});

//mounting user routes
app.use('/api/v1/user', userRoutes);

//mounting employee routes
app.use('/api/v1/emp', employeeRoutes);

//importing Mongoose User model
//it will let us create and save new user documents in MongoDb
//const User = require('./models/user'); //go up one folder

//start the server after connecting to MongoDb
async function startServer() {
    try {
        await connectDB();
        app.listen(SERVER_PORT, () => {
            console.log(
                `Server is running on port http://localhost:${SERVER_PORT}/`
            );
        });
    } catch (error) {
        console.error('Failed to connect to the database', error);
        process.exit(1); // Exit the process with an error code
    }
}
startServer();

module.exports = app; //exporting the app object so that it can be used in other files


//defining an endpoint
//app.post('/api/v1/user/signup',async(req,res) =>{
 //   try{
        //const user = new User(req.body); //reads the submitted json
        //await user.save();

        //res.status(201).send('User registered successfully'); //returns the success status
    //}catch(error){
       // res.status(400).send('Signup failed');
        
    //}
//});



