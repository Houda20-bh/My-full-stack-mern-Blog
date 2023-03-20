const  {validationResult}= require('express-validator')
const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userInfo } = require('os');

const Register = async(req,res)=>{
    try{
        //validate the data
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(402).json({errors: errors.mapped()})
        }
        // Does user exist
        const {name,email,password,role}= req.body;

        const found= await User.findOne({email})
        if (found){
             return res.status(401).json({message:'you already have an account'})
        }
        // register a user
        ///1- hash the password
        const salt= bcrypt.genSaltSync(10);
        const hashedPassword= await bcrypt.hash(password,salt);
        ///2- create and save new user
        const newUser= await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        })
        return res.status(200).json(newUser);
    }
     catch(error){res.status(500).json({message:error})}
};
const Login = async(req,res)=>{
try{
    //Check the data
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(402).json({errors: errors.mapped()})
    }
    const {email,password}=req.body;
    const found =  await User.findOne({email})
    if (!found){
        res.status(402).json({message:'you have to sign up first'})
    }
    // check passord (is correct)
    const isMatched= await bcrypt.compare(password,found.password)
       if(!isMatched){
        return res.status(403).json({message: 'invalid credentials'})
       }
       // generate a token
       const token = await jwt.sign({id:found._id},process.env.SECRET,{
        expiresIn:'30d'
       });
       res.status(200).json({found,token})
}

catch(error){res.status(500).json({message:error})}
};
module.exports ={
    Register,Login
}