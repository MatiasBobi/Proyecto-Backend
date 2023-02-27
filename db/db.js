const mongoose = require("mongoose")
require("dotenv").config()
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_ACCESS)
        console.log("Base de datos conectada.")
    } catch  {
        console.log("Ocurrio un problema al intentar conectarse con la base de datos.")
    }
}

module.exports = {connect}