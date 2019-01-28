const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'caferio';

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
    deleteUser: (req, res) => {
        knex('users').del().where('id', req.decoded.id)
        .then((results) => {
            res.send(200)
        })
    }
}