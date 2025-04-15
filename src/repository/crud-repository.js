
class crudRepo {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;

        } catch (error) {
            console.log("something went wrong in the crud repo");
            console.log(error);
            throw error;
        }
    }
    async destroy(id){
        try {
            const res=await this.model.findByIdAndDelete(id);
            
            return res;
        } catch (error) {
            console.log("something went wrong in the crud repo");
            console.log(error);
            throw error
        }
    }
    async get(id){
        try {
            const res=await this.model.findById(id);
            return res;
        } catch (error) {
            console.log("something went wrong in the crud repo");
            console.log(error);
            throw error;
        }
    }
    async getAll(){
        try {
            const res=await this.model.find({});
            return res;
        } catch (error) {
            console.log("something went wrong in the crud repo");
            console.log(error);
            throw error;
        }
    }
    async update(id,data){
        try {
            const res=await this.model.findByIdAndUpdate(id,data);
            return res;
        } catch (error) {
            console.log("Something went wron in the crud repo");
            throw error;
        }
    }
}

export default crudRepo;