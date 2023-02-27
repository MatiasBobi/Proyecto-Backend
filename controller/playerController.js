const {PlayersData} = require ("../models/player")
const {validationResult} = require("express-validator")
module.exports = {

    async createNewPlayer (req, res){
        try {
            const err = validationResult(req)
            if(err.isEmpty()){
                const player = new PlayersData(req.body)
                await player.save()
                res.status(201).json(player)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },

    async playerList (req, res){
        try{
            const players = await PlayersData.find()
            res.status(200).json(players)
        } catch(error){
            res.status(500).json(error)
        }
    },
    async searchPlayer (req,res){
        try{
            const player = await PlayersData.findById(req.params.id)
            res.status(200).json(player)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async editPlayer (req, res){
        try {
            const err = validationResult(req)
            if(err.isEmpty()){
                await PlayersData.findByIdAndUpdate(req.params.id, req.body)
                res.status(201).json({msg: "El jugador se ha actualizado con exito"})
            } else {
                res.status(501).jso(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },

    async deletePlayer (req, res){
        try {
            await PlayersData.findByIdAndRemove(req.params.id)
            res.status(202).json({msg: "El jugador ha sido eliminado con exito"})
        } catch (error) {
            res.status(501).json(error)
        }
    }


}