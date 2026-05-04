const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI); 
        console.log(`DB Connected`);
    } catch (error) {
        console.log(`Error in DB ${error}`);
    }
}
module.exports = connectDb;