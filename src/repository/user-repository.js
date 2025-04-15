import User from "../models/user.js";
import crudRepo from "./crud-repository.js";

class UserRepo extends crudRepo{
    constructor(){
        super(User);
    }
}

export default UserRepo;