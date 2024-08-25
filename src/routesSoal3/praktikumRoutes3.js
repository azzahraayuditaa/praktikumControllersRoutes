const express = require('express');
const router = express.Router();
const numberController = require('../controllers/numberController');

router.post('/decimal', numberController.decimalToOthers);
router.post('/binary', numberController.binaryToOthers);
router.post('/octal', numberController.octalToOthers);
router.post('/hexadecimal', numberController.hexadecimalToOthers);

module.exports = router;
