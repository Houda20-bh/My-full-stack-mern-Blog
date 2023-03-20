const {body}= require('express-validator')
exports.DataValidation=[
    body('email','Please enter a valod email').isEmail(),
    body('password','Please your passord must be at least 6').isLength({min:6}),
];