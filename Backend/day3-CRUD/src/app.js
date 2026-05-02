//Here i am creating server 
const express = require('express');
const app = express();
app.use(express.json())
//From here on i am writing the logics from my CRUD

//This is the users data
const users = [];


//Create
app.post('/users', (req, res) => {
    users.push(req.body);
    return res.status(201).json({
        message: "A new user added successfully",
    });
});

//Read
app.get('/getusers', (req, res) => {
    return res.status(200).json({
        message: 'Users data fetched Successfully',
        users,
    });
});

//Update (Patch)
app.patch('/users/update/:index', (req, res) => { // Removed /update from URL
    const { index } = req.params;
    const { age } = req.body;

    if (!users[index]) {
        return res.status(404).json({ message: "User not found at this index" });
    }

    users[index].age = age;
    return res.status(200).json({ message: "User age updated successfully" });
});

//Delete
app.delete('/users/delete/:index', (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.status(200).json({
        message: "User deleted successfully"
    });
});

//Here i exported my app to server.js
module.exports = (app);