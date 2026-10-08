//after npm i mongoose

const mongoose = require("mongoose");
//imports mongoose pacakge without which our app will not have the Mongoose 
//methods which we will use to connect to and work with MongoDb

const MongoDb_URI = process.env.MongoDb_URI;
//this gets mongodb connection string from .env file.
//process.env is how node.js access envi variables
//process.env.MongoDb_URI = give me the value stored under MONGODB_URI(we dont want
//databse confi/credentials hard coded into our source code)


//creating a fun connectDB to connect our app to Mongodb
async function connectDB() {
    //try to execute this code .if something goes wrong hadle the error in catch
    try {
        await mongoose.connect(MongoDb_URI); //tells mongoose to connect to MongoDb using this connection string
        console.log('MongoDB connected');
    } catch (error){
        console.error('MongoDb connection failed: ', error.message);
        process.exit(1); // tells node.js to stop app as the db conne tion failed
        //1 incating the program ended cuz of an error
        
    }
    
}
module.exports = connectDB;
//makes the connectdb fun available to other js files