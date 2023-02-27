const express = require("express");
const logger = require("morgan")
const cors = require("cors")
const app = express();

const  {connect} = require("./db/db")

const playerRouter = require("./routes/players")
const tournamentRouter = require("./routes/league-argentina")

app.use(logger("dev"));
app.use(express.json())
app.use(cors())

app.use("/player", playerRouter);
app.use("/tournament", tournamentRouter)




connect();


module.exports = app
