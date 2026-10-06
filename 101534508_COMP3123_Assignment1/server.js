
const express = require('express');

//define server port
const SERVER_PORT = 3000;

//initialize express applicstion
const app = express();

//define a route for the root URK
//here '/' means local host 3000 port
app.get('/',(req, res) => {
    res.send("Server is Running");
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost: ${SERVER_PORT}/`)
});
