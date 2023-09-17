//const mongoose = require('mongoose');
import mongoose from "mongoose";
import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    content :{
        type : String ,
        required : true
    },
    userId : {
        Type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required : true
    },
    onModel :{
        type: String ,
        required : true,
        enum :['Tweet','Comment']
    },
    commentable :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    }
}, {timestamps: true});
export default Hashtag;
 