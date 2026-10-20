const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) =>  {
        //read the authorization header from the request
        const authHeader = req.headers.authorization;

        //check if the token was provided
        if (!authHeader || !authHeader.startsWith('Bearer ')) { //CORRECTED WITH AI 
            return res.status(401).json({
                success: false,
                 message: 'Authorization token missing or invalid'
                
                });
        }
        //extracting the JWT from "Bearer <token>
        const token = authHeader.split(' ')[1]; //corrected with AI

        try{
        //verify the JWT using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //make the authenticated users identity available in the request object for use in subsequent middleware or route handlers
        req.user = decoded;

        next(); //continue to the controller      
    } catch (error) {
        //INVLAID OR EXPIRED TOKEN
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};

module.exports = authMiddleware;