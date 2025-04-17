 //import {TweetRepository,HashtagRepository} from "../repository/index.js";
import HashtagRepository from "../repository/hashtag-repository.js";
import TweetRepository from '../repository/tweet-repository.js'

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g) || [];
        tags = tags.map(tag => tag.substring(1).toLowerCase());
        console.log(tags)
        const tweet = await this.tweetRepository.create(data);
        console.log(tweet)
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        const alreadyPresentTagTitles = alreadyPresentTags.map(tag => tag.title.toLowerCase());

        let newTags = tags
            .filter(tag => !alreadyPresentTagTitles.includes(tag))
            .map(tag => ({ title: tag, tweets: [tweet._id] }));

        await this.hashtagRepository.bulkCreate(newTags);

        // Now update tweet ID in existing tags
        for (const tag of alreadyPresentTags) {
            if (!Array.isArray(tag.tweets)) {
                tag.tweets = [];
            }

            if (!tag.tweets.includes(tweet._id)) {
                tag.tweets.push(tweet._id);
            }

            await tag.save();
        }

        return tweet;


    }

    async get(tweetId){
        const tweet=await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }

}
export default TweetService;