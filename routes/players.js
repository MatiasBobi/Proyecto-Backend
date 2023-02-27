const express = require("express")
const {createNewPlayer, editPlayer, playerList, searchPlayer, deletePlayer} = require("../controller/playerController")
const {validarID} = require("../middleware/validadId")
const {validarCrearJugador} = require("../middleware/validarCrearJugador")
const {validarEditar} = require("../middleware/verificarEditar")
const {check} = require("express-validator")
const router = express.Router()

router.get("/listPlayers", playerList)
router.get("/searchPlayer/:id", searchPlayer)
router.post("/newplayer", validarCrearJugador , [
    check("name").not().isEmpty().withMessage("Debe ingresa el nombre"),
    check("age").not().isEmpty().withMessage("Debe ingresa la edad"),
    check("birthdate").not().isEmpty().withMessage("Debe ingresa la fecha de nacimiento"),
    check("nacionality").not().isEmpty().withMessage("Debe ingresa el nombre del club"),
    check("club").not().isEmpty().withMessage("Debe ingresa el nombre del club"),
    check("dni").not().isEmpty().withMessage("Debe ingresa el DNI"),
], createNewPlayer)
router.put("/editPlayer/:id", validarID, validarEditar, [
    check("name").not().isEmpty().withMessage("Debe ingresa el nombre"),
    check("age").not().isEmpty().withMessage("Debe ingresa la edad"),
    check("birthdate").not().isEmpty().withMessage("Debe ingresa la fecha de nacimiento"),
    check("nacionality").not().isEmpty().withMessage("Debe ingresa el nombre del club"),
    check("club").not().isEmpty().withMessage("Debe ingresa el nombre del club"),
    check("dni").not().isEmpty().withMessage("Debe ingresa el DNI"),
],
editPlayer)
router.delete("/deletePlayer/:id", validarID, deletePlayer)

module.exports = router;