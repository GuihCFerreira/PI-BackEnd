const router = require('express').Router();
const controller = require('../controllers/temperaturaController');

router.get('/atual', controller.atual);
router.get('/lista', controller.lista);
router.post('/criar', controller.criar);
router.get('/createTemperaturaIOT', controller.createTemperaturaIOT);

module.exports = router;