const express=require("express")
const app=express();

const connect=require('./config/database')
const Tweet=require('./models/tweet');


app.listen(3000,async ()=>{
    console.log("server started");
    await connect();
    console.log('MongoDB Connected');

})