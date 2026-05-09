import mongoose from 'mongoose';

//arrow function for connecting mongoDB 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;