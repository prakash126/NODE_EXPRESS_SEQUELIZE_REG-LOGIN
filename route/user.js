const express = require("express");

const router = express.Router();
const userController = require("../controller/user");
router.post("/registration", userController.addUser);
router.post("/loginuser", userController.loginuser);

module.exports = router;
