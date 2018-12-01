const filtro = require('../models/filtro');
const filtroController = {};

filtroController.index = async function (req,res,next) {
    try{
        let filtros = await filtro.find();
        return res.status(200).json(filtros);
    }catch(error){
        return res.status(500).json({error:error});
    }
}

//insertar
filtroController.store = store = async function(req,res,next){
    let f = new filtro();
    f.idCelular = req.body.idCelular;
    f.marca = req.body.marca;
    f.modelo = req.body.modelo;
    f.bateria = req.body.bateria;
    try{
        await f.save();
        return res.status(200).json({message:"INGRESO EXITOSO"});
    }catch(error){
        return res.status(500).json({error:error});
    }
}

filtroController.delete = async function(req,res,next){
    let{id}=req.params;
    try{
        await filtro.remove({_id:id});
        return res.status(200).json({message:"Eliminado exitoso"});
    }catch(error){
        return res.status(500).json({error:error});
    }
}

filtroController.update = async function(req,res,next){
    let{id}=req.params;
    let data = {
        idCelular:req.body.idCelular,
        marca:req.body.marca,
        modelo:req.body.modelo,
        bateria:req.body.bateria
    }
    console.log(data);
    try{
        await data.update({_id:id},data);
        res.status(200),json({message:"ACTUALIZADO"});
    }
    catch(err){
        return res.status(500).json({err:err,message:"por favor revise sus datos"});
    }
}
module.exports = filtroController;