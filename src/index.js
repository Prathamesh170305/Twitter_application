const express=require("express")
const app=express();

const connect=require('./config/database')
const Tweet=require('./models/tweet');
const HashtagRepository=require('./repository/hashtag-repository');

const {TweetRepository}=require('./repository/index');
const TweetService=require('./services/tweet-service');


app.listen(3000,async ()=>{
    console.log("server started");
    await connect();
    console.log('MongoDB Connected');
    
})