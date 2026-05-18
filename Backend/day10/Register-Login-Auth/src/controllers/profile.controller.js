const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const profileController = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({
            message: 'Token not found. Please login first.'
        });

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode) return res.status(401).json({
            message : 'Unauthorised user'
        })
        const user = await User.findById(decode.id);
        if (!user) return res.status(401).json({
            message: "Unauthorised user"
        });

        return res.status(200).json({
            message: "Welcome to the posts route!",
            user: {
                firstName: user.firstName,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = profileController;