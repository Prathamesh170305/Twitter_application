import Like from "../models/like.js";
import crudRepo from "./crud-repository.js";

class LikeRepo extends crudRepo{
    constructor(){
        super(Like);
    }
    async findByUserAndLikeable(data){
        try {
            const like=await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default LikeRepo;