
//jsonwebtoken
const jwt = require('jsonwebtoken');


//funct to handle POST /api/v1/user/login
const loginUser = async (req, res) => {
    try{
        
//getting the login identifier sent by the client
//this can be either a username or an email address
        const { identifier, password } = req.body;

//search the users collection for One user.
//the user muust match either the provided username OR the provided email.
const user = await User.findOne({
    $or: [
    { username: identifier},            //trying to find a user by username
    { email: identifier.toLowerCase() } // or find a user by email, lowercase to match

    ]
})

//need hash password for login
.select("+password"); //password is hidden as set as false in user model

//checking if user was not found
//checking if the password matches with the stored bcrypt hash
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
