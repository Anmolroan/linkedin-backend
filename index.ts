// All the Packages used here
const express = require("express");
const http=require("http");
require("dotenv").config();
// All the import from other files

const PORT=process.env.PORT || 8080;

const app=express();// Express app initialization


const server=http.createServer(app);

server.listen(PORT,()=>{
    console.log("Server started at port :-",PORT);
    
})


