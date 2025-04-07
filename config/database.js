import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    // if db already connected, don't connect again
    if (connected){
        console.log('MongoDB is connected');
        return;
    }

    // Connect to MongoDb
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
}

export default connectDB;