const express = require('express');
const router = express.Router();
const LogInLogInControler = require('../Controllers/LogIn.Controller');


router.post("/login",LogInLogInControler.LogIn);
module.exports = router;