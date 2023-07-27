import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGO_URL = `mongodb://yash_0813:Yash0813@ac-ywwltzj-shard-00-00.umofzhb.mongodb.net:27017,ac-ywwltzj-shard-00-01.umofzhb.mongodb.net:27017,ac-ywwltzj-shard-00-02.umofzhb.mongodb.net:27017/?ssl=true&replicaSet=atlas-nbeax3-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    }
    catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;

