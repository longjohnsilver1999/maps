const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express()

dotenv.config()
app.use(express.json())
// mongoose.connect('',{useNewUrlParser:true})


app.listen(5012,()=>{
    console.log("backend app is running ")
})