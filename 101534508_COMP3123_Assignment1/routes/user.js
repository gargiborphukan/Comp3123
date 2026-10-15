//import express to verate a route
const express = require('express');

//cretaing a new express route
const router = express.Router();

//importing user controller fun
const {signupUser, loginUser } = require('../controllers/usercontroller');

//POST /api/v1/user/signup
router.post('/signup', signupUser); //calls sigup controller

//POST /api/v1/user/login
router.post('/login', loginUser);

module.exports = router;