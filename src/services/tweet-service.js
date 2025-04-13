const {TweetRepository}=require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();

    }

    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts the hashtags from the content of the tweet
        tags=tags.map((tag)=>tag.substring(1));
        console.log(tags);
        const tweet=await this.tweetRepository.create(data);
        return tweet;
    }
    
}
module.exports=TweetService;