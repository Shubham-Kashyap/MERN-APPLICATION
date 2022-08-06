
const express = require('express');
const api = express.Router();
const endpoint = "/api/v1/";
const { chalk } = require('../exports/library');
const  {authenticateToken}  = require('../middlewares/auth');
const { validateRequest, validate, checkValidate, validate2, userValidationRules, validate3 } = require('../helpers/validate');
const { check, validationResult } = require('express-validator');


/* -- Controllers initialization start -- */
const UserController = require('../controllers/api/UserController');
/* -- Controller initialization end  -- */

api.get(`/greetings`, UserController.greetings);


// api.all("*" ,userValidationRules(),validate2,(req, res, next) => {   // check working
// api.all("*" ,[validate('signup'),validate2],(req, res, next) => {   // my trial 
// api.all("*" ,validate('signup'),validate2,(req, res, next) => {   // working
// api.all("*" ,checkValidate,(req, res, next) => {   // trial under review 
api.all("*", (req, res, next) => {


    let method = req.originalUrl.split("/").pop();
    api.all("*", validate3(method), (req, res, next) => {

        /** Define routes here */
        api.post(`/signup`, UserController.userSignup);
        api.post(`/login`, UserController.login);
        
        
        api.post(`/fetch-profile`, authenticateToken,UserController.fetchProfile);
        api.post(`/get-auth-user`, authenticateToken,UserController.fetchProfile);

        next();
    })

    next();
});



module.exports = api;
