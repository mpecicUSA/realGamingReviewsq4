//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const games = require("../controllers/games.js")
const reviews = require("../controllers/reviews.js")
const comments = require("../controllers/comments.js")



module.exports = (app) => {
    // Get requests 
    app.get("/users", users.getAll);
    app.get('/games', games.getAll);
    app.get('/reviews', reviews.getAll);
    app.get('/comments', comments.getAll);

    //Post requests
    app.post('/users/addUser', users.addUser);
    app.post('/reviews/addReview', reviews.AddReview);
    app.post('/games/addGame', games.AddGame);
    app.post('/comments/addComment', comments.AddComment);

}