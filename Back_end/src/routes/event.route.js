const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/event.controller')
const passport = require('passport')
const upload = require('../utils/multer');

router.get('/events', passport.authenticate('bearer', { session: false }), eventsController.getAllEvents);


router.get('/events/:id', passport.authenticate('bearer', { session: false }), eventsController.getOneEvent);

router.post('/events', [passport.authenticate('bearer', { session: false }), upload.single('picture') ],eventsController.addOneEvent);

router.put('/events/:id', [passport.authenticate('bearer', { session: false }), upload.single('picture')],eventsController.updateOneEvent);

router.delete('/events/:id', passport.authenticate('bearer', { session: false }), eventsController.deleteOneEvent);



module.exports = router;