const controller = {};
const temperaturaService = require('../service/temperaturaService');

const {getDataAtual} = require('../util/dateUtil');
const {getHoraAtual} = require('../util/timeUtil');

controller.atual = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado"})
}

controller.lista = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado 2"})
}

controller.criar = async function(req, res){

    const temperatura = req.body.temperatura;
    const data = getDataAtual();
    const hora = getHoraAtual();

    if(!temperatura) return res.status(422).json({"erro": "Dever ser informado o valor da temperatura."});

    const temperaturaObj = {
        temperatura,
        data,
        hora
    }

    try {

        const temp = await temperaturaService.createTemperatura(temperaturaObj);
        res.status(201).json(temp)
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({"erro": error});

    }
}

controller.createTemperaturaIOT = async function (req, res){

    const {temperatura, unidadeMedida} = req.query;
    const data = getDataAtual();
    const hora = getHoraAtual();

    if(!temperatura && !unidadeMedida) return res.status(422).json({"erro": "Dever ser informado o valor da temperatura e a unidade de medida."});

    const temperaturaObj ={
        temperatura,
        unidadeMedida,
        data,
        hora
    }

    try{

        const temp = await temperaturaService.createTemperatura(temperaturaObj);
        res.status(200).json(temp);

    }catch(error){
        console.log(error);
    }

}

module.exports = controller;