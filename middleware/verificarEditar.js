const { DateTime } = require("luxon");
const {PlayersData} = require("../models/player")
const fechaLimiteLibroDePases = DateTime.fromISO("2023-01-28");
const fechaActual = DateTime.fromISO(
  DateTime.now().toFormat("yyyy-MM-dd").toString()
);

const validarEditar = async (req, res, next) => {

    try {
        const playerinfo = await PlayersData.findById(req.params.id)
        
        if(req.body.club === 'Libre'){
            next()
        } else {
            if(playerinfo.club !== req.body.club){
                
                if (fechaActual.ts <= fechaLimiteLibroDePases.ts) {
                    
                    next()
                  } else {
                    res.status(501).json({ERROR: "El libro de pases esta cerrado, no se puede cambiar de club a este jugador."})
                  }    
                
             } else {
                next()
             }
     
        }
        
    } catch (error) {
        res.status(501).json(error)
    }


}

module.exports = {validarEditar}