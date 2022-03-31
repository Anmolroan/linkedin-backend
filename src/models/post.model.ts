import {Schema , model} from "mongoose";
const postSchema= new Schema({
    author:{type:Schema.Types.ObjectId,required:true,ref:"users"},
    image:{type:String,required:false,},
    text:{type:String,required:true},
})

export default model("posts",postSchema);