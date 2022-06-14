const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../Controllers/forgotPassword.controller')


router.post('/forgotpassword',forgotPasswordController.forgotPassword);

module.exports = router;