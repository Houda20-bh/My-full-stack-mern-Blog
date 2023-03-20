const express = require('express')
const router = express.Router();
const{Register,Login} = require('../Controllers/UserControllers')
const {DataValidation}= require('../Middleware/DataValidation')
router.post('/register',DataValidation,Register)
router.post('/login',Login);


module.exports = router;