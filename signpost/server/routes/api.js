// model declaration goes here
var User = require('../models/user');

var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening!');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: "The API works!"});
});

router.route('/users')
  .post(function(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'User created!' });
    });
  })
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);
      res.json(users);
    })
  });

// see this link for other useful routes (like getall, delete):
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

module.exports = router;
