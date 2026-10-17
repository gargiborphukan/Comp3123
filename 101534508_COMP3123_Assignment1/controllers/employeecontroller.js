//i mportinh jsonwebtoken to create JWT tokens after login
const jwt = require('jsonwebtoken');

//import the user model to serach and create users in MongoDb
const User = require('./.models/user');

//POST for Signup (api/v1/user/signup)
const signup = async (req, res) => {
    try{
        //getting the username,eamil and password from the request body
        const {username, email, password } = req.body;

        //checking if the user already exist
        const existingUser = await User.findOne({
            $or[
                {username : username},
                {email    : email.toLowercase() }
            ]

        });

        //username or email already exists(404 error)
        if (existingUser){
            return res.status(409).json({
                success   : false,
                message   : "Username or email already exists"
            });
        }

        //Create a new user
        //the password is automatically hashed by the pre save hook in user.js
        const newUser = await User.create({
            username,
            email,
            password
        });

        //sending back only safe user info and not returning the hashed password.
        return res.status(201).json({
            success        : true,
            message        : "User registered successfully",
            user           : {
                id         : newUser.username,
                email      :  newUser.email,
                created_at : newUser.created_at
        }

    
        });

    } catch(error){
        if(error.code === 11000){  //handling duplicate key databse errors
            return res.status(409).json({
                success   : false,
                message   : "Username or email already exists"
            });
        }

        //handling unexpected server errors.
        return res.status(500).json({
            success    :  false,
            message    : "Internal server error"
        });
    }
};

//Post login (api/v1/user/login)
const loginUser = async (req, res)  => {
    try {
        const{identifier, password} = req.body; 

        const user = await User.findOne({
            $or : [
                {username : identifier},
                {email    :identifier.toLowercase()}
            ]
        })
        //including the hidden password hash so bcrypt can compare it
        .select('+password');


        //returning 401 if there is no user /password is wrong
        if (!user || !(await user.verifyPassword(password))){ 
            // return 401 for both user not found and wrong password but not disclosing it
            return res.status(401).json({
                success: false, 
                messge: "Invalid username/email or password"
            });
        
        }
        
        //when th epassword is correct-creating a data that will be stored inside the JWT
        //Never put the password or sentive information inside a JWT
        const payload = {
            userId  : user._id,
            username: user.username,
            email   : user.email
        };
        
        //creating a JWT using the secret key form the .env file
        const token = jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIN: "1h"
        }); //specify expiresIn for 1h
        
        
        
        //sending a successful login response withs 200
        return res.status(200).json({
            success     : true,
            message     : "Login successful",
            token,
            user        : {
                id      : user_id,
                username: user.username,
                email   : user.email
            }
        }) ;
} catch(error){
                return res.status(500).json({
                    success : false,
                    message: "Server Error"
                
       });
    }  
};

//exporting both controller functions for routes
module.exports = {
    signupUser,
    loginUser
};