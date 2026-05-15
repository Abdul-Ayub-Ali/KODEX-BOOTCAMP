const express = require('express');
const { registerController } = require('../controllers/auth.controller');
const route = express.Router();
route.post('/create-user',registerController);
module.exports = route;