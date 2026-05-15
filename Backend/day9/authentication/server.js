const app = require('./src/app');
const connectDb = require('./src/config/database');
require('dotenv').config();
connectDb();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})
