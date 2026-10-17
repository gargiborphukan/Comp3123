const express = require("express");
const { route } = require("./student");

const routes = express.Router();


//employee or route level middleware can be added here if needed
routes.use((req, res, next) => {
    console.log(`Employee route middleware - ${req.method} ${req.url}`);
    next();
});

//Query parameter example
//http://localhost:3000/employee?name=John&city=Toronto
routes.get('/employee',(req,res) =>{
    console.log(req.query)
    const name  = req.query.name;
    const city  = req.query.city;


    if(!name || !city){
        next(new Error("Missing required query parameters: name and city"));
        return; // stop furthur execution if parameters are missing
    }


    res.send({
        method: "GET",
        path : `/employee?name=${name}&city=${city}`,
        name : name,
        city: city
    });
});

//Path Parameter example
//http://localhost: 3000/student/John/Toronto
//We can use both post and get
routes.get('/employee/:name',(req,res) =>{
    console.log(req.param)
    const name  = req.param.name;
    const city  = req.param.city;

    res.send({
        method : "GET",
        path: `/employee/${name}/${city}`,
        name : name,
        city: city,
    });
});


//Body parameter
routes.post('/employee', (req, res) =>{
    const name = req.body.name;
     const city  = req.body.city;

    res.send({
        method : "POST",
        path: `/employee/${name}/${city}`,
        name : name,
        city: city,
    });
});


module.exports = routes;
