const { DateTime } = require("luxon");
const fechaLimiteLibroDePases = DateTime.fromISO("2023-02-22")
const fechaActual = DateTime.fromISO(DateTime.now().toFormat("yyyy-MM-dd").toString())



if(fechaActual.ts === fechaLimiteLibroDePases.ts){
    console.log("Fechas iguales")
} else {
    console.log("Fechas desiguales")
}