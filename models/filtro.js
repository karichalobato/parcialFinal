const mongoose = require('mongoose');
const {Schema} = mongoose;

const filtroSchema = new Schema({
    idCelular:{type:String,unique:true,required:true},
    marca:{type:String,required:true},
    modelo:{type:String,required:true},
    bateria:{type:Number,required:true}
});
module.exports = mongoose.model('filtros',filtroSchema);