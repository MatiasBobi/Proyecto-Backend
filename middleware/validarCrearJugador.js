const {PlayersData} = require("../models/player")

const validarCrearJugador = async (req, res, next) =>{

    const exists = await PlayersData.findOne({ dni: req.body.dni})
    console.log(exists)
    if(exists !== null) {
        res.status(501).json({msg: "El jugador con el DNI ingresado ya existe."})
    } else {
        next()
    }
    
}

module.exports = {validarCrearJugador}