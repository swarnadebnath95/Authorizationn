const express = require("express");
const authController = require("../module/controllers/authController");
const UserRoute = express.Router();

UserRoute.post("/register",authController.registerUser);

module.exports = UserRoute;

