import mongoose from 'mongoose';

class DbConfig {
    
    getMongoose() {
        return mongoose;
    }
    connect = (url: string) => {
        console.log(url);
        mongoose.connect(url)
            .then(() => {
                console.log('DB is connected');
            })
            .catch((err) => {
                console.log(err);
                console.log('An error ocurred while trying connect to the db');
            });
    }
}

export default new DbConfig();