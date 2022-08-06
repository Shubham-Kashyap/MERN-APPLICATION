
const express = require('express');
const admin = express.Router();
const endpoint = "/admin/v1/";
const { chalk } = require('../exports/library');
const  {authenticateToken}  = require('../middlewares/auth');
const { validateRequest, validate, checkValidate, validate2, userValidationRules, validate3 } = require('../helpers/validate');
const { check, validationResult } = require('express-validator');


/* -- Controllers initialization start -- */
const UserController = require('../controllers/admin/AdminController');
/* -- Controller initialization end  -- */

admin.get(`/greetings`, UserController.greetings);


// admin.all("*" ,userValidationRules(),validate2,(req, res, next) => {   // check working
// admin.all("*" ,[validate('signup'),validate2],(req, res, next) => {   // my trial 
// admin.all("*" ,validate('signup'),validate2,(req, res, next) => {   // working
// admin.all("*" ,checkValidate,(req, res, next) => {   // trial under review 
admin.all("*", (req, res, next) => {


    let method = req.originalUrl.split("/").pop();
    admin.all("*", validate3(method), (req, res, next) => {

        /** Define routes here */
        admin.post(`/signup`, UserController.userSignup);
        admin.post(`/login`, UserController.login);
        
        
        admin.post(`/fetch-profile`, authenticateToken,UserController.fetchProfile);
        admin.post(`/get-auth-user`, authenticateToken,UserController.fetchProfile);

        next();
    })

    next();
});



module.exports = admin;
