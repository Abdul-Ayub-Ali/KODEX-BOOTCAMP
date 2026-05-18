const jwt = require("jsonwebtoken");
const UserModel = require("../models/auth.model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(404).json({
        message: "Unauthorised User",
      });
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode)
      return res.status(401).json({
        message: "Unauthorised User",
      });
    let user = await UserModel.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

module.exports = authMiddleware;