const express = require ('express');
const connect = require('./config/database');
const app = express();
const PORT=3000;

 

app.listen(PORT,async()=>{
 console.log(`Server started at ${PORT}` );
 await connect();
 console.log("Mongoose DB Connected");
  
});  