//Importing mongoose

const mongoose = require('mongoose');


//defining a schema for  a employee

const employeeSchema = new mongoose.Schema({
    
    first_name    : {
        type      : String,
        required  : [true, "First name is required"],
        trim      : true
    },

    last_name : {
        type     : String,
        required : true
    },
    email        : {
        type     : String,
        trim     : true,
        lowercase: true,
        required : [true,"Email is required"],
        match    : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            "Please fill a valid email"
        ]
        
    },    
 
    position     :{
        type     : String,
        required : true,
        
    },
    salary       : {
        type     : Number,
        required : [true, " Salary is required"],
        min      : [0, "Salary cannot be negative"]

    },

    date_of_joining : {
        type        : Date,
        required    : true
    
    },
    department      : {
        type        : String,
        required    : [true,"Dept Is required"],
        trim        : true
    },
    user            : {
        type        : mongoose.Schema.Types.ObjectId,
        ref         : "User", //refernces the user model
        required    : [true, "An employee must have an owner(user)"]
    }
},
//schema options
    {

    timestamps      : {
        createdAt   : "created_at", 
        updatedAt   : "updated_at"
      }

    }


);

//creating and exporting the employee model
 module.exports = mongoose.model("Employee", employeeSchema);
 
  

