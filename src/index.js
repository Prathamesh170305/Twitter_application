const express=require("express")
const app=express();

const connect=require('./config/database')
//const Tweet=require('./models/tweet');

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');


app.listen(3000,async ()=>{
    console.log("server started");
    await connect();
    console.log('MongoDB Connected');
    // const tweet=await Tweet.create({
    //     content:'First Tweet',
    //     userEmail:'a@b.com'
    // })
    //console.log(tweet);
    //const tweets=await Tweet.find({userEmail:'a@b.com'})
    //console.log(tweets)
    const tweetRepo=new TweetRepository();
    // const tweet=await tweetRepo.update('67fa30b94b90af1ffb477b74',{content:'updated tweet'});
    // console.log(tweet)
    const tweet=await tweetRepo.create({content:'Tweet with comment'});
    const comment=await Comment.create({content:'new Comment'});
    tweet.comments.push(comment);
    await tweet.save()
    console.log(tweet);

})