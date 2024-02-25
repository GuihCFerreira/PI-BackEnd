const mongoose = require('mongoose');

const Pressao = mongoose.model('Temperatura',{
    pressao: String,
    data: String,
    hora: String,
});

module.exports = Pressao;