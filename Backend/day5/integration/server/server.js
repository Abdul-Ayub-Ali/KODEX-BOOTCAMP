//dotenv , app , DataBase Required
require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");
//database called and server listened
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT no ${process.env.PORT}`);
});
