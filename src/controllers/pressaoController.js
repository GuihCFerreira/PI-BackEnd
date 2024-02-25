const controller = {};
const {getDataAtual} = require('../util/dateUtil');
const {getHoraAtual} = require('../util/timeUtil');

controller.atual = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado p"})
}

controller.lista = async function(req, res){
    res.status(200).json("dataFormatada")
}

controller.criar = async function(req, res){

    const pressao = req.body.pressao;
    const data = getDataAtual();
    const hora = getHoraAtual();

    if(!pressao) return res.status(422).json({"erro": "Dever ser informado o valor da pressão."});

    const pressaoObj = {
        pressao, 
        data,
        hora
    }

    res.status(201).json({"mensagem":"ta criado p"}) 
}

module.exports = controller;