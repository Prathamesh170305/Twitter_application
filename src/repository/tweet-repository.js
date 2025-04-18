import Tweet from '../models/tweet.js'
import crudRepo from './crud-repository.js';

class TweetRepository extends crudRepo{
    constructor(){
        super(Tweet);
    }

    async create(data){
        try {
            const tweet =await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    
    async getAll(offset,limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    find(id){
        try {
            const tweet=Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;