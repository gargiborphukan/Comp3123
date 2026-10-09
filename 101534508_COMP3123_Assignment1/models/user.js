//Importing mongoose

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//hash time sets bcrypt cost factor to 10
const hash_time = 10;

//hash a password
//bcrypt.compare checks wheather a plain text password matches an existing hash.
//plain text is the password provided by the user
async function hashPassword(plaintext) {
    return bcrypt.hash(plaintext, hash_time);
    
}

//verify a password
async function verifyPassword(plaintext,hash) {
    return bcrypt.compare(plaintext,hash)
    
}

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


//hash password before saving
//rund before mongoose saves a new/ updates user doc
userSchema.pre('save',async function() {
    //checks whether the password is new/has been modified
    //if unchanged,skip hashing to avoid hashing an existing hash
    if(!this.isModified('password')) return;
    this.password = await hashPassword(this.password);
    //hashes the plain text password before it is stored in MongoDb
    //hashpasswd -if we hash an already-hashed password again during an unrelated
    //user update, the original password will no longer verify correctly.
});

//Method to verify passwords
userSchema.methods.verifyPassword = function(plaintext){
    return verifyPassword(plaintext,this.password);
}
       
//creatign a mongoose model from our userschema with mongoose.model
//user obj will n=be used to create and find users
  const User = mongoose.model('User', userSchema);

 //to fisnd other files and signup routes
 
 module.exports = User;
 
  

