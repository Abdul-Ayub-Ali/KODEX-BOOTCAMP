require('dotenv').config();
const app = require('./src/app');
const connectDb = require('./src/config/database')
connectDb();
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`)
})