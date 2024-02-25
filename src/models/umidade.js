const mongoose = require('mongoose');

const Umidade = mongoose.model('Temperatura',{
    umidade: String,
    data: String,
    hora: String,
});

module.exports = Umidade;