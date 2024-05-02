const router=require("express").Router()
const Pin=require("../models/Pin")


router.post("/",(req,res)=>{
    const newPin=new Pin(req.body)
})