const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

//handle login requests

router.post("/login", authController.login);

module.exports = router;
