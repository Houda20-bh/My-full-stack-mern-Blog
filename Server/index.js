const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require("cors");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const UserRouter= require('./Routes/UserRouters');
const app= express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/users',UserRouter);
// connect db
connectDB ();
app.use(cors());

app.listen(process.env.PORT, ()=>{
    console.log(`server running perfectly on ${process.env.PORT}` )
})