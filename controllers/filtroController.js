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
module.exports = filtroController;