const express = require('express');
const cors = require('cors');
const db = require('../database/connectDb');

//const routes = require('../routes/indexRouter');
const temperaturaController = require('../controllers/temperaturaController');
const umidadeController = require('../controllers/umidadeController');

const server = express();

server.use(cors());
server.use(express.json());

server.use(
    express.urlencoded({
        extended: true
    })
);

//server.use(routes);
server.get('/temperatura/getTemperaturaAtual', temperaturaController.getTemperaturaAtual);
server.get('/temperatura/getTemperaturaHistorico', temperaturaController.getTemperaturaHistorico);
server.get('/temperatura/createTemperaturaIOT', temperaturaController.createTemperaturaIOT);

server.get('/umidade/getUmidadeAtual', umidadeController.getUmidadeAtual);
server.get('/umidade/getUmidadeHistorico', umidadeController.getUmidadeHistorico);
server.get('/umidade/createUmidadeIOT', umidadeController.createUmidadeIOT);

const initServer = ()=> {
    db.connectDatabase();
    server.listen(3001,()=> console.log("Rodando na porta 3001"));
}

module.exports={initServer};