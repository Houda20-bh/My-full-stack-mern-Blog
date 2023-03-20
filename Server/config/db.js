// connect db
const mongoose= require('mongoose');
const connectDB= async ()=>{
    try{
        const conx = await mongoose.connect(process.env.DB_URI)
    console.log(`MongoDB connected:${conx.connection.host}`.bgMagenta.underline)
    } catch(error){
      console.log(error)
      process.exit(1)
    }
}
module.exports= connectDB;