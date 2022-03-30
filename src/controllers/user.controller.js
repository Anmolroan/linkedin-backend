const express =require('express');
const router =express.Router();
const User =require('../models/user.model');

router.get("/",async function(req, res){
    try{
        const users =await User.find()
        return res.status(201).send(users);
    }catch{
        return  res.status(500).send({message:e.message,status:"Failed"})
    }
});
router.post("/",async (req, res)=>{
    try{
        const user =await User.create(req.body);
        return res.status(201).send(user)
    }catch(e){
        return  res.status(500).send({message:e.message,status:"Failed"})
     }
})
module.exports =router;