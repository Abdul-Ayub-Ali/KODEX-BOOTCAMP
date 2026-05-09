//imported dotenv and app
import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

//configured dotenv so that it is availed in the whole server
dotenv.config();

//connected mongoDB with the server
connectDB();

//started the server using environment variable
app.listen(process.env.PORT, () => {
    console.log(`Server is running at PORT ${process.env.PORT}`);
});
