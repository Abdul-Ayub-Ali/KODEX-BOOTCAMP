const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('1st Server using Express Framework of nodeJS')
});
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT no ${PORT}`)
});
