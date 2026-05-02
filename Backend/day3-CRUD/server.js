//Here we am importing the app that is created in app.js and run the server here at PORT 3000.
const app = require('./src/app');
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is started at PORT no ${PORT}`)
})