const mongoose = require('mongoose');
const database = process.env.MONGODB_URL;
const connectDb = async () => {
    try {
      await mongoose.connect(database);
      console.log('mongoDB connected')
    } catch (error) {
        console.log(`Error in connection mongoDB ${error}`)
    }
}

module.exports = connectDb;