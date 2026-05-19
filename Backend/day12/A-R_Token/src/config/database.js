const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongoDB connected");
  } catch (error) {
    console.log(`error in connecting DB ${error}`);
  }
};
module.exports = connectDb;
