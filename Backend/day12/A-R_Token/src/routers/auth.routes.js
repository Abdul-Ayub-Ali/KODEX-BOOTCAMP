const express = require("express");
const {
  registerController,
  loginController,
  getAccessToken,
} = require("../controllers/auth.controllers");
const router = express.Router();
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/accessToken", getAccessToken);

module.exports = router;
