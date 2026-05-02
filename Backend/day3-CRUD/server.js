const app = require('./src/app'); // App ko import kiya

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is started at PORT no ${PORT}`);
});