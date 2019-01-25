const knex = require("../db/knex.js");

module.exports = {
// Pull all games
    getAll: function(req, res) {
    // res.send("is this working");
    knex("games")
        .then((results)=>{
            res.json(results)
        })
    },
    // Add a single game
    addGame: (req,res) => {
        knex('games')
            .insert(req.body)
            .then((games)=> {
                res.json(games)
        })
    },
    //delete single game
    deleteGame: (req, res) => {
        knex('games').del().where('id', req.params.id)
        .then((results) => {
            res.send(200)
        })
    }
}