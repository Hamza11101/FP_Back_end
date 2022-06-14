const express = require('express');
const router = express.Router();
const authControler = require('../Controllers/auth.Controller');


router.post("/login", authControler.logIn);
router.post("/register", authControler.register);

module.exports = router;