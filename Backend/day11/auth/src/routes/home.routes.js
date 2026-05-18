const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    console.log(req.user);
    res.status(200).json({
      message: "Home Route Accessed Successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
