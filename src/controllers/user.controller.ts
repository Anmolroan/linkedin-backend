import { Router,Request,Response } from "express";
const router =Router();
const User =require('../models/user.model');

router.get("/",async function(req:Request, res:Response){
    try{
        const users =await User.find()
        return res.status(201).send(users);
    }catch(error){
        return  res.status(500).send({message:error.message,status:"Failed"})
    }
});
router.post("/",async (req:Request, res:Response)=>{
    try{
        const user =await User.create(req.body);
        return res.status(201).send(user)
    }catch(error){
        return  res.status(500).send({message:error.message,status:"Failed"})
     }
})
module.exports =router;