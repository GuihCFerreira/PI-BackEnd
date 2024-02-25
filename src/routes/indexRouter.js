const router = require('express').Router();

const temperaturaRouter = require('./temperaturaRoutes');
const umidadeRouter = require('./umidadeRoutes');
const pressaoRouter = require('./pressaoRoutes');

router.use('/', (req, res)=> res.status(200).json({"mesage":"tela inicial"}));
router.use('/temperatura', temperaturaRouter);
router.use('/umidade', umidadeRouter);
router.use('/pressao', pressaoRouter);

module.exports= router;