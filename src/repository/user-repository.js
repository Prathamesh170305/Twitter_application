import User from "../models/user.js";
import crudRepo from "./crud-repository.js";

class UserRepo extends crudRepo{
    constructor(){
        super(User);
    }

    async findBy(data){
        try {
            const response=await User.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default UserRepo;