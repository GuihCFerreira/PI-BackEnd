const controller = {};

const {getDataAtual} = require('../util/dateUtil');
const {getHoraAtual} = require('../util/timeUtil');

controller.atual = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado u"})
}

controller.lista = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado 2 u"})
}

controller.criar = async function(req, res){

    const umidade = req.body.umidade;
    const data = getDataAtual();
    const hora = getHoraAtual();

    if(!umidade) return res.status(422).json({"erro": "Dever ser informado o valor da pressão."});

    const umididaObj= {
        umidade,
        data,
        hora
    }

    res.status(201).json({"mensagem":"ta criado u"}) 
}

module.exports = controller;