const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const registerController = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;
    if (!email || !password)
      return res.status(400).json({
        message: "Required field empty",
      });
    const isExisted = await UserModel.findOne({
      email,
    });
    if (isExisted)
      return res.status(409).json({
        message: "User already exists",
      });
    const newUser = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });

    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);
    newUser.refreshToken = refreshToken;
    await newUser.save();
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        message: "Required fields are empty",
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
        message: "Wrong credentials",
      });
    const accessToken = generateAccessToken(isExisted._id);
    const refreshToken = generateRefreshToken(isExisted._id);
    isExisted.refreshToken = refreshToken;
    await isExisted.save();
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return res.status(200).json({
      message: "User loggedIn",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};
const getAccessToken = async (req, res) => {
  try {
    let refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(401).json({
        message: "Unauthorised user",
      });
    const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    if (!decode)
      return res.status(401).json({
        message: "Unauthorised user",
      });
    const user = await UserModel.findById(decode.userId);
    if (!user)
      return res.status(401).json({
        message: "Unauthorised user",
      });
    if (refreshToken !== user.refreshToken)
      return res.status(401).json({
        message: "Unauthorised user",
      });
    const accessToken = generateAccessToken(user._id);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    return res.status(200).json({
      message: "Access token refreshed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};
module.exports = {
  registerController,
  loginController,
  getAccessToken,
};
