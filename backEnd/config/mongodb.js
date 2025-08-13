import mongoose from "mongoose";

const connectDB = async()=>{

    //There must not be any @ symbol in your mongoose project passwords..
    mongoose.connection.on('connected',()=>{
        console.log('DB CONNECTED');
    })
  
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)
}


export default connectDB;