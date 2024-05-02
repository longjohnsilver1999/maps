const router=require("express").Router()
const Pin=require("../models/Pin")


router.post("/",async(req,res)=>{
    const newPin=new Pin(req.body)
    try{
    const davepin=await newPin.save()
    res.status(200).json(davepin)
    }catch(err){
        console.log(err)
        res.status(500).json("error here",err)
    }
})