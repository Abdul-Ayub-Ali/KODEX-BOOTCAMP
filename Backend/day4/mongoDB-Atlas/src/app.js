const express = require('express');
const userModel = require('./model/userModel');
const app = express();

app.use(express.json());

// --- ROUTES ---

// 1. CREATE - Naya user save karna
app.post('/api/v1/users', async (req, res) => {
    try {
        const { username, password, email, mobile } = req.body;

        if (!username || !email || !password || !mobile) {
            return res.status(400).json({ message: "Username, Email and Password are required" });
        }

        const newUser = await userModel.create({ username, email, password, mobile });

        res.status(201).json({
            status: 'success',
            message: 'New user created successfully',
            data: { user: newUser }
        });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
});

// 2. READ - Saare users dekhna
app.get('/api/v1/users', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: { users }
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: 'Error in fetching users' });
    }
});

// 3. UPDATE - User ka data badalna
app.patch('/api/v1/users/:id', async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true 
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "No user found with that ID" });
        }

        res.status(200).json({
            status: 'success',
            message: 'User updated',
            data: { user: updatedUser }
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
});

// 4. DELETE - User ko hatana
app.delete('/api/v1/users/:id', async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "No user found with that ID" });
        }

        res.status(204).json({ 
            status: 'success',
            message: 'User deleted'
        });
    } catch (error) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
});

module.exports = app;