const knex = require("../db/knex.js");

module.exports = {
// Pull all users
    getAll: function(req, res) {
    // res.send("is this working");
    knex("users")
        .then((results)=>{
            res.json(results)
        })
    },
    // Add a single user
    addUser: (req,res) => {
        knex('users')
            .insert(req.body)
            .then((users)=> {
                res.json(users)
        })
    }
}