import LikeRepo from "../repository/like-repository.js";
import TweetRepository from "../repository/tweet-repository.js";
import HashtagRepository from "../repository/hashtag-repository.js";

class LikeService{
    constructor(){
        this.likeRepo=new LikeRepo();
        this.tweetRepository=new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){
        if(modelType=='Tweet'){
            var likeable=await this.tweetRepository.find(modelId).populate({path:'likes'});
        }
        else if(modelType=='Comment'){
            //todo
        }
        else{
            throw new Error('unknow model type');
        }
        const exists=await this.likeRepo.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeableL:modelId
        });

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isRemoved=true;
        }
        else{
            const newLike=await this.likeRepo.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved=false;
        }
        return isRemoved;
    }


}

export default LikeService;