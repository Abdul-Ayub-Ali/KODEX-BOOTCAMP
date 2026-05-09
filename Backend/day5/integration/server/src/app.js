//server created using express
const express = require('express');
const userModel = require('./model/user.Model');
//middleware used 
var cors = require('cors')
const app = express();
app.use(express.json());
//understand the use of cors middleware
app.use(cors({
    origin : 'http://localhost:5173'
}))
// post user api created 
app.post('/users', async (req, res) => {
    const { name, age, email, password } = req.body;
    if (!name || !age || !email || !password) {
        res.status(400).json({
            message: 'All field are required'
        })
    } else {
        try {
            const newUser = await userModel.create({
                name,
                age,
                email,
                password,
            });
            res.status(201).json({
                message: 'user created successfully',
                user: newUser
            })
        } catch (error) {
            console.log('failed in API', error)
            res.status(400).json({
                message: 'error in creating user'
            })
        }
    }


})
module.exports = app;