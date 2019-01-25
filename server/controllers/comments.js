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
    },
    //edit comment
    editComment: (req, res) => {
        knex('comments').update(req.body).where('id', req.params.id)
        .then((results) => {
            res.send(200)
        })
    },
    deleteComment: (req, res) => {
        knex('comments').del().where('id', req.params.id).then((results) => {
            res.send(200)
        })
    }
}