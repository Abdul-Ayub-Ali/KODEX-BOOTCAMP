const express = require('express'); // Yeh zaroori hai!
const app = express();

// Middleware
app.use(express.json()); 

const users = [];

// Route
app.post('/addUser', (req, res) => {
    users.push(req.body);
    res.status(201).json({
        success: true,
        message: "User ban gaya bhai!",
        userId: "12345"
    });
});
app.get('/user',(req,res)=>{
    return res.status(200).json({
        message:'Got the users',
        users,
    })
})
app.patch('/updateUser:')
module.exports = app; // App ko export kar diya