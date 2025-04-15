import TweetService from "../services/tweet-service.js";

const tweetService=new TweetService();

export const createTweet=async(req,res)=>{
    try {
        const res=await tweetService.create(req.body);
        return res.status(201).json({
            success:true,
            message:'Successfully created the tweet',
            data:res,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Soemthing went wrong',
            data:{},
            err:error
        })
    }
}
