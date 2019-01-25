//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const games = require("../controllers/games.js")
const reviews = require("../controllers/reviews.js")
const comments = require("../controllers/comments.js")



module.exports = (app) => {

<<<<<<< HEAD
=======
    // Get requests

>>>>>>> 0f03159d110f22df3f19fdb0e0bc5cb33f7fcf11
    //USERS
    app.get("/users", users.getAll);
    app.post('/users/addUser', users.addUser);
    app.delete('/users/delete/:id', users.deleteUser);

    //GAMES
    app.get('/games', games.getAll);
    app.post('/games/addGame', games.AddGame);
    app.delete('/games/delete/:id', games.deleteGame);

    //REVIEWS
    app.get('/reviews', reviews.getAll);
    app.post('/reviews/addReview', reviews.AddReview);
    app.patch('/reviews/edit/:id', reviews.editReview);
    app.delete('/reviews/delete/:id', reviews.deleteReview);

<<<<<<< HEAD
=======
    //GAMES
    app.post('/games/addGame', games.AddGame);

>>>>>>> 0f03159d110f22df3f19fdb0e0bc5cb33f7fcf11
    //COMMENTS
    app.get('/comments', comments.getAll);
    app.post('/comments/addComment', comments.AddComment);
    app.patch('/comments/:id', comments.editComment);
    app.delete('/comments/delete/:id', reviews.deleteComment);

    // Edit requests

    //USERS
    app.get('/edit/:id', users.EditUser);
    app.post('/edit/:id', users.UpdatedUser);

    //REVIEWS
    app.get('/edit/:id', reviews.EditReview);
    app.post('/edit/:id', reviews.UpdatedReview);

    //COMMENTS
    app.get('/edit/:id', comments.EditComment);
    app.post('/edit/:id', comments.UpdatedComment);


}
