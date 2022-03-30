// All the Packages used here
const express = require("express");
const http=require("http");
require("dotenv").config();
// All the import from other files
const connect =require("./src/configs/db")
const PORT=process.env.PORT || 8080;

const app=express();// Express app initialization
const userController =require("./src/controllers/user.controller");
app.use("/users",userController)

const server=http.createServer(app);

server.listen(PORT,async()=>{
    console.log("Server started at port :-",PORT);
    await connect();
})


