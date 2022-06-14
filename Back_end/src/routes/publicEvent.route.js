const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/event.controller')


router.get('/eventspub',eventsController.getAllEvents);


router.get('/eventspub/:id',eventsController.getOneEvent);





module.exports = router;