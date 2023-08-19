const express = require ('express');
const connect = require('./config/database');
const app = express();
const PORT=3000;


 const TweetRepository = require ('./repository/tweet-repository');

 const Comment = require('./models/comment');

app.listen(PORT,async()=>{
 console.log(`Server started at ${PORT}` );
 await connect();
 console.log("Mongoose DB Connected");

//  const tweet = await Tweet.create({
//     content :"Second Tweet",
//     //userEmail :"a@b.com"
//  });

const tweetRepo =  new TweetRepository();
 const tweet = await tweetRepo.getWithComments('64e04a9fcfa3420409070ccc');
console.log(tweet);
});  