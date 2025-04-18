import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true});

//hook for the passwrd encryption
userSchema.pre('save',function(next){
    const user=this;
    const SALT=bcrypt.genSaltSync(9);
    const encryptedPassword=bcrypt.hashSync(user.password,SALT);
    user.password=encryptedPassword;
    next();
});

//hook to check the incoming password for signin
userSchema.methods.comparePassword=function compare(password){
    return bcrypt.compareSync(password,this.password);
}

//hook to generate the new jwt token
userSchema.methods.genJWT=function generate(){
    return jwt.sign({id:this._id , email:this.email},'twitter_secret',{
        expiresIn:'1h'
    });
}

const User=mongoose.model('User',userSchema);
export default User;