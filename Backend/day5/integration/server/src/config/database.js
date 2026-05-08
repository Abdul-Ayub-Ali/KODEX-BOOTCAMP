const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/kodex')
        console.log('mongoDB connected')
    } catch (error) {
        console.log("error in connecting DB :",error)
    }
};
module.exports = connectDB;