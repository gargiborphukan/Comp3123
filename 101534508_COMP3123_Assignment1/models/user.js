//Importing mongoose

const mongoose = require('mongoose');

//importing bcrypt for password hashing and comparison
const bcrypt = require('bcrypt');

//hash time sets bcrypt cost factor to 10
const SALT_ROUNDS = 10;


//defining a schema for  a user
//ids are created userid automatically -moongodb/moongoose

const userSchema = new mongoose.Schema({


    username     : {
        type     : String,
        required : [true, "Username is required"],
        unique   : true,
        trim     : true,
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [30, "Username must be at most 30 characters"]
    },
    email        : {
        type     : String,
        trim     : true,
        unique   : true,
        lowercase: true,
        required : [true,"Email is required"],
        match    : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
            "Please fill a valid email"
        ]
        
    },    
 
    password     :{
        type     : String,
        required : true,
        minlength: 8,
        select   : false //prevents password hash from being returned in normal queries
    }
},
{
        timestamps:{
            created_at   : 'created_at',
            updated_at   :  'updated_at'
    
    }
}
);


//hash password before saving
//rund before mongoose saves a new/ updates user doc
userSchema.pre('save',async function(next) {
    //checks whether the password is new/has been modified
    //if unchanged,skip hashing to avoid hashing an existing hash
    if(!this.isModified('password')) return (next);
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    next();
    //hashes the plain text password before it is stored in MongoDb
    //hashpasswd -if we hash an already-hashed password again during an unrelated
    //user update, the original password will no longer verify correctly.
});

//Method to verify passwords
userSchema.methods.verifyPassword = function(plaintext){
    return bcrypt.compare(plaintext,this.password);
}
       
//creatign a mongoose model from our userschema with mongoose.model
//user obj will n=be used to create and find users
const User = mongoose.model('User', userSchema);

 //to fisnd other files and signup routes
 
 module.exports = User;
 
  

