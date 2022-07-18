import mongoose from 'mongoose';

class DbConfig {
    DB_CNN: string = process.env.DB_CNN as string;
    getMongoose() {
        return mongoose;
    }
    connect = () => {
        console.log(`DB_CNN: ${this.DB_CNN}`)
        mongoose.connect(this.DB_CNN)
            .then(() => {
                console.log('DB is connected');
            })
            .catch((err) => {
                console.log('An error ocurred while trying connect to the db');
            });
    }
}

export default new DbConfig();