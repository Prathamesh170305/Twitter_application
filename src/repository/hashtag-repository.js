import Hashtags from '../models/hashtags.js';

class HashtagRepository{
    async create(data){
        try {
            const tag =await Hashtags.create(data);
            return tag;

        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const tag=await Hashtags.findById(id);
            return tag;
        } catch (error) {   
            console.log(error);
        }
    }
    async bulkCreate(data){
        try {
            const tags=await Hashtags.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const response=await Hashtags.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(titleList){
        try {
            const tags=await Hashtags.find({
                title:titleList
            });
            return tags
        } catch (error) {
            console.log(error)
        }
    }
    
}

export default HashtagRepository;