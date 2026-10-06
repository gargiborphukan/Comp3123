const express = require("express");

const routes = express.Router();


//define your college routes
routes.get("/", (req, res) => {
  res.send({
    version: "1.0",
    method: "GET",
    path: `/college`,
    message: "Welcome to the College API v1"
  });
});

module.exports = routes;




