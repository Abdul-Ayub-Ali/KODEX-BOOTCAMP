const app = require("./src/app");
const connectDb = require("./src/config/database");
require("dotenv").config();
const port = process.env.PORT || 4000;
connectDb();
app.listen(port, () => {
  console.log(`Server is started at PORT ${port}`);
});
