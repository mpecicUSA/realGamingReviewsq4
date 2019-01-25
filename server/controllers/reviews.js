const knex = require("../db/knex.js");

module.exports = {
// Pull all reviews
    getAll: function(req, res) {
    // res.send("is this working");
    knex("reviews")
        .then((results)=>{
            res.json(results)
        })
    },
    // Add a single review
    addReview: (req,res) => {
        knex('reviews')
            .insert(req.body)
            .then((reviews)=> {
                res.json(reviews)
        })
    }
}