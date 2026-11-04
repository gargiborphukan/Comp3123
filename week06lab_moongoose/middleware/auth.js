const jwt = require("jsonwebtoken")

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    // The token is expected to be in the format "Bearer <token>"
    if(!authHeader){
        return res.status(401).send({ message: "No Token Provided" });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded
        next()
    } catch (err) {
        return res.status(403).send({ message: "Invalid Token" });
    }
}

module.exports = authenticateToken