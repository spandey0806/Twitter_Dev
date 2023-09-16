//const mongoose = require ('mongoose');
import mongoose from 'mongoose';   //es6
// const connect = async ()=>{
//     await mongoose.connect("mongodb://localhost/twitter_Dev");
// }

// module.exports =  connect;

export const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}
