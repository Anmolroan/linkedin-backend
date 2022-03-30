const mongoose =require('mongoose');
module.exports=()=>{
    return mongoose.connect(process.env.mongodb_uri)
}
