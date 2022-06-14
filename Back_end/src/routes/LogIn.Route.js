const express = require('express');
const router = express.Router();
const logInLogInControler = require('../Controllers/logIn.Controller');


router.post("/login",logInLogInControler.logIn);
module.exports = router;