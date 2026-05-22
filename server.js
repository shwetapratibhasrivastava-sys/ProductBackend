import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotnev from "dotenv"
import connectDb from "./config/db.js"
import productRoute from "./routes/productRoute.js"

dotnev.config()
const app=express()
connectDb();

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("API IS RUNNING")
})
app.use("/api/product",productRoute)


const PORT=process.env.PORT || 7000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})