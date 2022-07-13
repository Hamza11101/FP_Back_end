const express = require('express');
const router = express.Router();
const dashBoardController= require('../controllers/dashboard.controller')

router.get('/dash/stat',dashBoardController.getAllStat);



module.exports = router;