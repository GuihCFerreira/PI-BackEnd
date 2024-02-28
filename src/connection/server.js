const express = require('express');
const cors = require('cors');
const db = require('../database/connectDb');

//const routes = require('../routes/indexRouter');
const temperaturaRoutes = require('../routes/temperaturaRoutes');
const umidadeRoutes = require('../routes/umidadeRoutes');

const server = express();

server.use(cors());
server.use(express.json());

server.use(
    express.urlencoded({
        extended: true
    })
);

//server.use(routes);
server.use('/temperatura', temperaturaRoutes);
server.use('/umidade', umidadeRoutes);

const initServer = ()=> {
    db.connectDatabase();
    server.listen(3001,()=> console.log("Rodando na porta 3001"));
}

module.exports={initServer};