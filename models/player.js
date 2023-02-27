const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schema = new Schema({
    name:{
        required: true,
        type: String,
    },
    age:{
        required: true,
        type: Number
    },
    birthdate:{
        required: true,
        type: String
    },
    nacionality:{
        required: true,
        type: String
    },
    club:{
        required: true,
        type: String
    },
    dni:{
        required: true,
        type: String
    }

})

const PlayersData = mongoose.model("NewPlayer", schema)


module.exports = {PlayersData}