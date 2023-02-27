const express = require("express")
const {leagueData} = require("../controller/leagueArgentinaController")
const router = express.Router()

router.get("/positions", leagueData)

module.exports = router