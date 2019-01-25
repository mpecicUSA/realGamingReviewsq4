const knex = require("../db/knex.js");

module.exports = {
// Pull all comments
    getAll: function(req, res) {
    // res.send("is this working");
    knex("comments")
        .then((results)=>{
            res.json(results)
        })
    },
    // Add a single comment
    addComment: (req,res) => {
        knex('comments')
            .insert(req.body)
            .then((comments)=> {
                res.json(comments)
        })
    }
}