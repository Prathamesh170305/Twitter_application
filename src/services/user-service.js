import UserRepo from '../repository/user-repository.js';

class UserService{
    constructor(){
        this.userRepo=new UserRepo();
    }
    async signup(data){
        try {
            const user=await this.userRepo.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the user service layer")
        }
    }
}

export default UserService;