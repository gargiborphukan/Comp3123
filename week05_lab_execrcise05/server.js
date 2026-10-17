const express = require('express');
const studentRoutes = require("./routes/student");
const employeeRoutes = require("./routes/employee");
const collegeV1Routes = require("./routes/college.v1");
const collegeV2Routes = require("./routes/college.v2");

//define server port
const SERVER_PORT = 3000;

//initialize express applicstion
const app = express();

//Middleware to parse JSON bodies in incoming request
app.use((req, res, next) =>{
    console.log(`Application -level middelware 1 - ${req.method} ${req.url}`)
    next()
});

app.use((req, res, next) =>{
    console.log(`Application -level middelware 2`)
    next()
});

//MIDDLEWARE TO PARSE json BODIES IN INCOMINH REQUest
app.use(express.json());


//middleware to parse URL-encoded bodies in incoming requests
app.use(express.urlencoded({extended: true}));

//Serve static files from the "public directory"
//app.use(express.static('public'));

//-/static if used we wont see the index.html file name
app.use("/static",express.static('public'));


//define a route for the root URK
//here '/' means local host 3000 port
app.get('/',(req, res) => {
    res.send("<h1>Hello, World!</h1>");

});

//app.get('/index', (req,res) =>{
 //   res.sendFile(__dirname + '/public/index.html');
//});

app.get('/hello',(req, res) => {
    res.setHeader("x-version-id","1.0");
    res.setHeader("Content-Type", "text/html");
    res.send('<h1> Hello from the /hello route!<h1>');
})

//use the student routes for /students endpoint
app.use("/api/v1/students",studentRoutes);

//use the employee routes for /employee endpoint
app.use("/api/v1/employee",employeeRoutes);

app.use("/api/v1/college",collegeV1Routes);
app.use("/api/v2/college",collegeV2Routes);

//http error
app.get('/test-error',(req,res) =>{
    throw new Error("This is a test error");
})

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: false,
        error: "Internal Server Error",
        code: 500,
        message: err.message,
        date: new Date().toISOString()
    });
});


app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost: ${SERVER_PORT}/`)
});