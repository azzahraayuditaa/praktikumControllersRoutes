const express = require('express');
const router = express.Router();
const suhuController = require('../controllers/suhuController');

router.post('/celsius', suhuController.celsiusToOthers);
router.post('/fahrenheit', suhuController.fahrenheitToOthers);
router.post('/kelvin', suhuController.kelvinToOthers);
router.post('/reamur', suhuController.reamurToOthers);

module.exports = router;
