import DbConfig from "../helpers/DbConfig";
import { User } from "../interfaces/interfaces";

class UserModel {
    Schema = DbConfig.getMongoose().Schema;
    constructor() {}
    userSchema = new this.Schema({
        email: String,
        password: {
            type: String,
            select: false
        },
        name: String
    });
    User = DbConfig.getMongoose().model('User', this.userSchema);
    // get all users
    async getUsers() {
        return await this.User.find();
    }

    // create one user
    async createUser(user: User) {
        const userDb = new this.User(user);
        await userDb.save();
    }

    async getUserByEmailWithPassword(email: string) {
        return await this.User.findOne({ email: email })
            .select('_id email name +password')
            .exec();
    }
}
export default new UserModel;