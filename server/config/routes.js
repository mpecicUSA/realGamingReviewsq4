//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const games = require("../controllers/games.js")
const reviews = require("../controllers/reviews.js")
const comments = require("../controllers/comments.js")
const login_register = require('../controllers/login_register.js')
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'caferio'


module.exports = (app) => {

   //TOKEN NOT REQURED
   app.get("/users", users.getAll);
   app.post('/users/addUser', users.addUser);
   app.get('/games', games.getAll);
   app.get('/reviews', reviews.getAll);
   app.get('/comments', comments.getAll);
   app.get('/login', login_register.login);
   app.get('/register', login_register.register)

   // app.use(verifyToken);

   //TOKEN REQUIRED
   app.delete('/users/delete/:id', users.deleteUser);
   app.post('/reviews/addReview', reviews.addReview);
   app.patch('/reviews/edit/:id', reviews.editReview);
   app.delete('/reviews/delete/:id', reviews.deleteReview);
   app.post('/comments/addComment', comments.addComment);
   app.patch('/comments/:id', comments.editComment);
   app.delete('/comments/delete/:id', comments.deleteComment);

}

function verifyToken(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          return res.status(401).send({message: 'You are not authorized to view that resource, Please log in to continue.' });
        } else {
          // if everything is good, save to request for use in other routes
          delete decoded.password;
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(401).send({
          message: 'You are not authorized to view that resource, Please log in to continue.'
      });

    }
}
