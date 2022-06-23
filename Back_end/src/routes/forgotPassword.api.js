const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../Controllers/forgotPassword.controller')

router.post('/forgotpassword',forgotPasswordController.forgotPassword);
router.post('/resetpassword',forgotPasswordController.resetPassword );

module.exports = router;