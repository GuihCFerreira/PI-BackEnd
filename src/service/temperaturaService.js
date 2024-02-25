const Temperatura = require('../models/temperatura');
const temperaturaService= {}

temperaturaService.createTemperatura = async (temperatura) =>{
    
    try{

        const temp = await Temperatura.create(temperatura);
        return temp;

    }catch(error){

        console.log(error);
        return error;

    }

}

module.exports = temperaturaService;