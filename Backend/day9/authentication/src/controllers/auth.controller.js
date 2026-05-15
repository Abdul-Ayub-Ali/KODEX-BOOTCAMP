const bcrypt = require('bcrypt');
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        const { fullname, username, email, password, contact } = req.body;

        if (!fullname || !username || !email || !password) {
            return res.status(400).json({ success: false, message: "Required input missing" });
        }

        const isExisted = await userModel.findOne({ email });
        if (isExisted) return res.status(409).json({ success: false, message: 'User Already Exist' });

        let hashPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            fullname, username, email, password: hashPassword, contact
        });

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET || 'default_secret_key',
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 3600000
        });

        return res.status(201).json({
            success: true,
            message: 'New user created',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            },
            token
        });

    } catch (error) {
        console.log('Error in Register Controller', error);
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
}
module.exports = {
    registerController,
}