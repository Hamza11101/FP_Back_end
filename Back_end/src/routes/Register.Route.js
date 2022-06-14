const express = require('express');
const router = express.Router();
const registerLogInControler = require('../Controllers/register.Controller');

router.post("/register",registerLogInControler.register);

module.exports = router;