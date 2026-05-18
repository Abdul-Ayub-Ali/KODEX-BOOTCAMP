const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    if (!email || !password)
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    let isExisted = await User.findOne({
      email,
    });
    if (isExisted)
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    let hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashPassword,
      firstName,
      lastName,
      role,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    res.cookie("Token", token);
    return res.status(201).json({
      success: true,
      message: "New user created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        message: "Email and password are required",
      });
    let isExisted = await User.findOne({
      email,
    });
    if (!isExisted)
      return res.status(401).json({
        message: "user not found register first",
      });
    const comparePass = await bcrypt.compare(password, isExisted.password);
    if (!comparePass)
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    const token = jwt.sign({ id: isExisted._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });
    res.cookie("token", token);
    return res.status(200).json({
      message: "user logged in successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  registerController,
  loginController,
};
