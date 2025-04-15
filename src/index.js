
import bodyParser from 'body-parser';
import express from 'express';
import {connect} from './config/database.js'


import apiRoutes from './routes/index.js'

import service from './services/tweet-service.js'
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.listen(3000,async ()=>{
    console.log("server started");
    await connect();
    console.log('MongoDB Connected');
    let ser=new service();
    // await ser.create({content:'Done with #refractor?'})
})