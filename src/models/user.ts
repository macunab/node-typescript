import DbConfig from "../helpers/DbConfig";

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
    async getUsers() {
        return this.User.find();
    }
}
export default new UserModel;