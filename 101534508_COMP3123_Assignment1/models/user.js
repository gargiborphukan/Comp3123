//Importing mongoose

const mongoose = require('mongoose');

//defining a schema for  a user

const userSchema = new mongoose.Schema({
    
    username     : {
        type     : String,
        required : true
    },
    email        : {
        type     : String,
        trim     : true,
        unique   : true,
        lowercase: true,
        required : "Email is required",
        match    : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email"]
        
    },    
 
    password     :{
        type     : String,
        required : true,
        minlength: 6
    }
},{
        timestamps:{
            created_at   : 'created_at',
            updated_at   :  'updated_at'
    
    },
});  
       
//creatign a mongoose model from our userschema with mongoose.model
//user obj will n=be used to create and find users
  const User = mongoose.model('User', userSchema);

 //to fisnd other files and signup routes
 
 mongoose.exports = userSchema;
 
  

