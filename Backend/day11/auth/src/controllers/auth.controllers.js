const UserModel = require("../models/auth.model");

const registerController = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    if (!email || !password)
      return res.status(400).json({
        message: "Fill the required fields",
      });
    let isExisted = await UserModel.findOne({
      email,
    });
    if (isExisted)
      return res.status(409).json({
        message: "User Already Exist",
      });
    const newUser = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });
    const token = newUser.generateJWT();
    res.cookie("token", token);
    return res.status(201).json({
      success: true,
      message: "New user created Successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal Server Error",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        message: "Fill required field",
      });
    const isExisted = await UserModel.findOne({
      email,
    });
    if (!isExisted)
      return res.status(404).json({
        message: "User not found",
      });
    const comparePass = isExisted.comparePassword(password);
    if (!comparePass)
      return res.status(401).json({
        message: "Invalid credentials",
      });
    const token = isExisted.generateJWT();
    res.cookie("token", token);
    return res.status(200).json({
      message: "USer Login Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server Error",
      error,
    });
  }
};
module.exports = { registerController , loginController };
