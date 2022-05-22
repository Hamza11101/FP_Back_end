const express = require('express');
const router = express.Router();
const RegisterLogInControler = require('../controllers/Register.Controller');

router.post("/register",RegisterLogInControler.Register);
router.get('/users', passport.authenticate('bearer', { session: false }), RegisterLogInControler.getAllUsers);
router.get('/user/:id', passport.authenticate('bearer', { session: false }), RegisterLogInControler.getOneUser);
module.exports = router;