const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.Controller')

router.post('/reservation',reservationController.createReservation);


module.exports = router;