import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js" 
import hotelRoutes from "./routes/hotels.js"
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.mongoData);
        console.log("connected to mongoDb")
    } catch(error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected")
})
mongoose.connection.on("connected", () => {
    console.log("mongodb connected")
})

app.use(cookieParser)
app.use(express.json())

//using middleware
app.use("/api/auth", authRoutes)
app.use("/api/hotels", hotelRoutes)


//middleware for error
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack
    })
})



app.listen(5500, ()=> {
    connect()
    console.log("connected to port 5500")
})