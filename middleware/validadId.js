const {PlayersData} = require("../models/player");

const validarID = async (req,res, next) =>{
    try {
       const item = await PlayersData.findById(req.params.id)
       if(item !== null) {
        next()
       } else {
        res.status(500).json({msg: "el id es invialido"})
       }
    } catch (error) {
        res.status(500).json({msg:"el id ingresado no coincide con el formato de 24 caracteres"})
    }
}

module.exports = {validarID}