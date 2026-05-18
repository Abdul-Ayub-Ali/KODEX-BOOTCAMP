const express = require("express");
const profileController = require("../controllers/profile.controller");
const route = express.Router();
route.get("/", profileController);
module.exports = route;
