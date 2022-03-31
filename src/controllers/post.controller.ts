import { Router,Request,Response } from "express";
import Post from "../models/post.model";
const router =Router();


//This the route for getting all the posts in the front page
router.get("/getall/:skip",async (req:Request,res:Response) =>{
    try {
        const post = await Post.find({}).skip(+req.params.skip*5).limit(5).lean().exec();
        return res.status(200).json(post);
    } catch (error) {
        return  res.status(500).send({message:error.message,status:"Failed"})
    }
})

// This is the route for getting  the posts of a perticular user with pagination

router.get("/getbyuser/:userID/:skip", async (req:Request,res:Response) =>{
 try {
     const post = await Post.find({author:req.params.userID}).skip(+req.params.skip*5)
     .limit(5).lean().exec();
     return res.status(200).json(post);
    } catch (error) {
    return  res.status(500).send({message:error.message,status:"Failed"})
 }
})
