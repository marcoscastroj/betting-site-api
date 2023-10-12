const express = require('express');
const router = express.Router();
const betController = require('../controllers/betController');

router.get('/', betController.getBet);

router.post('/', betController.createBet);

module.exports = router;