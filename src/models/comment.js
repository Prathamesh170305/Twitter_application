import mongoose, { mongo } from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    onModel:{
        type:String,
        required:true,
        enum:['Tweet','Comment'],

    },
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    }
}, { timestamps: true });

const comment = mongoose.model('comment', commentSchema)
export default comment;