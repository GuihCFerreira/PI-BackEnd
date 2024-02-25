const router = require('express').Router();
const controller = require('../controllers/umidadeController');

router.get('/atual', controller.atual);
router.get('/lista', controller.lista);
router.post('/criar', controller.criar);

module.exports = router;