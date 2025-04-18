import UserRepo from '../repository/user-repository.js';

class UserService {
    constructor() {
        this.userRepo = new UserRepo();
    }
    async signup(data) {
        try {
            const user = await this.userRepo.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the user service layer")
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepo.findBy({ email });
            return user;
        } catch (error) {
            console.log("something went wrong in the user-service");
            throw error;
        }
    }

    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email)
            if (!user) {
                throw{
                    message: 'No user found',
                    success: true
                }
            }
            if (!user.comparePassword(data.password)) {
                throw{
                    message: "Incorrect password",
                    success: true
                }
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;
