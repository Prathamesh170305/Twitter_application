import CommentRepository from "../repository/comment-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class CommentService{
    constructor(){
        this.commentRepo=new CommentRepository();
        this.tweetRepo=new TweetRepository();
    }
    
    async create(modelId,modelType,userId,content){ 
       
        if(modelType=='Tweet'){
            var commentable=await this.tweetRepo.get(modelId);
            console.log(commentable);
        }   
        else if(modelType=='Comment'){
            var commentable=await this.commentRepo.get(modelId);
        }
        else{
            
            throw new Error('Unknown model type');
        }
        const  comment=await this.commentRepo.create({
            content:content,
            userId:userId,
            onModel:modelType,
            commentable:modelId,
            comments:[],
        });
        commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }
}

export default CommentService;