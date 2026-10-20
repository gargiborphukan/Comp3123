//importing express so we can create a route

//import express to verate a route
const express = require('express');

//cretaing a new express route
const router = express.Router();


//importing employee controller functions
const {
    getEmployees, 
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeecontroller');

 //importing authentivation middleware
 const authMiddleware = require('../middleware/auth');


 //GET /api/v1/employee
 //gets all employees belonging to the logged in user
 //here express matches the route-authMiddleware checks JWT-is valid-controller retrieves only
 //employees belonging to the logged in user
router.get('/employees',authMiddleware, getEmployees); 

//CREATE an employee
router.post('/employees', authMiddleware, createEmployee);

//GET one employee by ID
router.get('/employees/:eid', authMiddleware, getEmployeeById);

//update an employee
router.put('/employees/:eid', authMiddleware, updateEmployee);

//delete an employee
router.delete('/employees', authMiddleware, deleteEmployee);


//the :eid is a route parameter.express makes it avilable through req.params.eid. it is used to identify the employee to be updated or deleted

module.exports = router;
