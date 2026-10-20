//i mportinh jsonwebtoken to create JWT tokens after login
const jwt = require('jsonwebtoken');

//import the user model to serach and create users in MongoDb
const Employee = require('../models/employee');

const mongoose = require('mongoose');

//----GET (api/v1/emp/employees) - get all employees---
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({ //filtering employees based on the authenticated user
            user: req.user.userId  //middleware gets user ID from the verified JWT and we
            //use that ID to ensure users can only manage their own employee
        });
        return res.status(200).json({
            success: true,
            employees
        });
    } catch (error) {
        console.error('Error fetching employees:', error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

//-----POST (api/v1/emp/employees) - create a new employee for the looged in user-----
const createEmployee = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            position,
            salary,
            date_of_joining,
            department
        } = req.body;

 //Creating a new employee in MongoDb
 const employee = await Employee.create({
            first_name,
            last_name,   
            email,
            position,
            salary,
            date_of_joining,
            department,

            user: req.user.userId //associating the employee with the authenticated user
        });
        return res.status(201).json({
            success: true,
            message: "Employee created successfully",
            employee
        });
    } catch (error) {   //**USED AI TO CORRECT**
        if(error.name === 'ValidationError'|| 
            error.name === 'CastError'
        ){ //handling validation errors
                return res.status(400).json({
                    success: false,
                    message: "Invalid employee information"
                });
            }

            console.error('Error creating employee:', error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

    //-----GET one employee by ID -----
        const getEmployeeById = async (req, res) => {
        try { 
            //getting the employee ID from the URL
            const employeeId = req.params.eid;

            if (!mongoose.isValidObjectId(employeeId)) { //checking if the ID is a valid MongoDB ObjectId
                return res.status(400).json({
                    success: false,
                    message: "Invalid employee ID"
                });
            }

            const employee = await Employee.findOne({
                _id: employeeId,
                user: req.user.userId //ensuring the employee belongs to the logged-in user
            });
            if (!employee) {
                return res.status(404).json({
                    success: false,
                    message: "Employee not found"
                });
            }

            res.status(200).json({
                success: true,
                employee
            });
        } catch (error) {
            console.error('Error fetching employee by ID:', error.message);

            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };

    //-----PUT - Update an employee by ID-----
    const updateEmployee = async (req, res) => {
        try {
            const employeeId = req.params.eid;
            
            if (!mongoose.isValidObjectId(employeeId)) { //checking if the ID is a valid MongoDB ObjectId
                return res.status(400).json({
                    success: false,
                    message: "Invalid employee ID"
                });
            }

            const employee = await Employee.findOne({
                _id: employeeId,
                user: req.user.userId //ensuring the employee belongs to the logged-in user
            });

            if (!employee) {
                return res.status(404).json({
                    success: false,
                    message: "Employee not found "
                });
            }
        //----UPDATE employee fields with the new data----
        const allowedFields = [
            'first_name',
            'last_name',
            'email',
            'position',
            'salary',
            'date_of_joining',
            'department'
        ];

        for (const field of allowedFields) {   //**USED AI TO CODE**//
            if (req.body[field] !== undefined) {
                employee[field] = req.body[field];
            }
        }
        //save and run mongoose schema validation
        await employee.save();

        return res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            employee
        });
    } catch (error) {
        if (error.name === 'ValidationError' || 
            error.name === 'CastError'
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid employee information"
            });
        }
        console.error('Error updating employee:', error.message);
    
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
    };

    //-----DELETE - Delete an employee by ID-----
const deleteEmployee = async (req, res) => {
    try {
        //get the employee ID from the URL
        const employeeId = req.query.eid;

        console.log('Deleting eid received:', employeeId);
        console.log("Is employeeId a valid ObjectId?", mongoose.isValidObjectId(employeeId));

        if (!employeeId) {
            return res.status(400).json({
                success: false,
                message: "Employee ID is required"
            });
        }
        if (!mongoose.isValidObjectId(employeeId)) { //checking if the ID is a valid MongoDB ObjectId
            return res.status(400).json({
                success: false,
                message: "Invalid employee ID"
            });
        }

        //find and delete only an employee owned by this user
        const employee = await Employee.findOneAndDelete({
            _id: employeeId,
            user: req.user.userId
        });

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        //204 means the deletion succeeded with no response body
        return res.status(204).end();
    } catch (error) {
        console.error('Error deleting employee:', error.message);

    
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
         
};

//-----exporting the functions to be used in routes-----
module.exports = {
    getEmployees,
    createEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee

};  