// const { query } = require('express');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.Controller')
const passport = require('passport')

// get a list of users from the db
router.get('/users', passport.authenticate('bearer', { session: false }), userController.getAllUsers);


// get one user by id
router.get('/users/:id',passport.authenticate('bearer', { session: false }), userController.getOneUser);

//add a new user to the db
router.post("/users",passport.authenticate('bearer', { session: false }), userController.addOneUser);

// update a list of todo from the db
router.put('/users/:id',passport.authenticate('bearer', { session: false }), userController.updateOneUser);

//delete a users to the db
router.delete('/users/:id',passport.authenticate('bearer', { session: false }), userController.deleteOneUser);



module.exports = router;