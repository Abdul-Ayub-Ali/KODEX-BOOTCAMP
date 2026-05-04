const  mongoose  = require('mongoose');
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/kodex')
    } catch (error) {
        console.log(`Error in database ${error}`)
    }
}
module.exports = connectDb
