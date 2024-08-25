//balok
const express = require('express');
const balokController = require('../controllers/balokController');

router.post('/volume', balokController.hitungVolumeBalok);
router.post('/luas-permukaan', balokController.hitungLuasPermukaanBalok);

module.exports = router;

//kubus
const express = require('express');
const router = express.Router();
const kubusController = require('../controllers/kubusController');

router.post('/volume', kubusController.hitungVolumeKubus);
router.post('/luas-permukaan', kubusController.hitungLuasPermukaanKubus);

module.exports = router;

//tabung
const express = require('express');
const routes = express.Router();
const tabungController = require('../controllers/tabungController');

router.post('/volume', tabungController.hitungVolumeTabung);
router.post('/luas-permukaan', tabungController.hitungLuasPermukaanTabung);

module.exports = router;

//bola
const express = require('express');
const route = express.Router();
const bolaController = require('../controllers/bolaController');

router.post('/volume', bolaController.hitungVolumeBola);
router.post('/luas-permukaan', bolaController.hitungLuasPermukaanBola);

module.exports = router;


