//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const games = require("../controllers/games.js")
const reviews = require("../controllers/reviews.js")
const comments = require("../controllers/comments.js")



module.exports = (app) => {

    // Get requests 

    //USERS
    app.get("/users", users.getAll);

    //GAMES
    app.get('/games', games.getAll);

    //REVIEWS
    app.get('/reviews', reviews.getAll);

    //COMMENTS
    app.get('/comments', comments.getAll);


    //Post requests

    //USERS
    app.post('/users/addUser', users.addUser);

    //REVIEWS
    app.post('/reviews/addReview', reviews.AddReview);

    //GAMES
    app.post('/games/addGame', games.AddGame);
    
    //COMMENTS
    app.post('/comments/addComment', comments.AddComment);


}