const express = require('express');
const router = express.Router();
const restPasswordController = require("../Controllers/resetPassword.controller");

router.post('/resetpassword',restPasswordController.resetPassword );

module.exports = router;