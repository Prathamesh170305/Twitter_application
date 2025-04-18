
import bodyParser from 'body-parser';
import express from 'express';
import {connect} from './config/database.js'
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';


import apiRoutes from './routes/index.js'

//import service from './services/tweet-service.js'
const app=express();

import UserRepo from './repository/user-repository.js';
import TweetRepository from './repository/tweet-repository.js';
import LikeService from './services/like-service.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.use(passport.initialize());
passportAuth(passport)

app.listen(3000,async ()=>{
    console.log("server started");
    await connect();
    console.log('MongoDB Connected');


    // const userRepo=new UserRepo();
    // const tweetRepo=new TweetRepository();
    // const tweets=await tweetRepo.getAll(0,10)
    // // const user=await userRepo.create({
    // //     email:'prathameshpict@gmail.com',
    // //     password:'123456',
    // //     name:'Prathamesh'
    // // });
    // const userId='67fea2c6056bcc0cb57393f9'
    // const likeService=new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet',userId);
})