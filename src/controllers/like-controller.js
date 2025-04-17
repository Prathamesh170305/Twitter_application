import LikeService from "../services/like-service.js";

const likeService=new LikeService();

export const toggleLike=async(req , res)=>{
    try {
        const res=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            success:true,
            data:res,
            err:{},
            message:'Successfully toggled the like'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:{},
            message:'Something went wrong in the toggleLike-likeController',
            err:error
        })
    }
}