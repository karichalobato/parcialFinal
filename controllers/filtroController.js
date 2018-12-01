const filtro = requiere('../models/filtro');
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

module.exports = filtroController;