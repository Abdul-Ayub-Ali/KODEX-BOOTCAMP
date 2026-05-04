require('dotenv').config();

const app = require('./src/app');
const connectDb = require('./src/db');

connectDb(); 

const { PORT } = process.env;

app.listen(PORT || 5000, () => {
    console.log(`server is running at port no ${PORT}`);
});