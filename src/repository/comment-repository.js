import crudRepo from "./crud-repository.js";
import comment from "../models/comment.js";

class CommentRepository extends crudRepo{
    constructor(){
        super(comment);
    }
}

export default CommentRepository; 