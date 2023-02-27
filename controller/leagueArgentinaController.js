const axios = require('axios');


module.exports = {
    async leagueData (req, res) {
        try{

        const {data} = await axios.get("https://v3.football.api-sports.io/standings?league=128&season=2023", 
        {
            headers:{
                "x-apisports-key" : "a7039e42c9b8809738871cc5ac633969"
        }
        })
        res.status(200).json(data.response[0].league.standings[1])
        } catch (error){
            res.status(500).json(error)
        }
    }
}