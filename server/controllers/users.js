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
    },
    //delete user
    //we will replace this with actual user later (instead of 1)
    deleteUser: (req, res) => {
        knex('users').del(req.body).where('id', 1)
        .then((results) => {
            res.send(200)
        })
    }
}