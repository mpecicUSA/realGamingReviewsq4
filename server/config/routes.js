//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const games = require("../controllers/games.js")
const reviews = require("../controllers/reviews.js")
const comments = require("../controllers/comments.js")



module.exports = (app) => {
    app.get("/users", users.index);
    app.get('/games', games.index);
    app.get('/reviews', reviews.index);
    app.get('/comments', comments.index);
}