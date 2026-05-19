const app = require("./src/app");
const connectDb = require("./src/config/database");
require("dotenv").config();
const port = process.env.PORT;
connectDb();
app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
