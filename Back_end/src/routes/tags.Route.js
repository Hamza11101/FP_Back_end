
const express = require('express');
const router = express.Router();
const TagsController = require('../controllers/tags.Controller')
const passport = require('passport')

router.get('/tags', passport.authenticate('bearer', { session: false }), TagsController.getAllTags);


router.get('/tags/:id', passport.authenticate('bearer', { session: false }), TagsController.getOneTag);

router.post("/tags", passport.authenticate('bearer', { session: false }),TagsController.addOneTag);

router.put('/tags/:id', passport.authenticate('bearer', { session: false }),TagsController.updateOneTag);

router.delete('/tags/:id', passport.authenticate('bearer', { session: false }), TagsController.deleteOneTag);



module.exports = router;