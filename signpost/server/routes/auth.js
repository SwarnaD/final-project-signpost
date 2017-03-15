var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.route('/auth')
  .post(function(req, res) {
    User.findOne({ 'email': req.body.email }, function(err, user) {
      if (err) res.send(err);
      try {
        console.log(req.body.email);
        if (user.checkPassword(req.body.password)) {
          var token = jwt.sign(user, 'placeholdersecret');  // TODO: write a local saved secret at some point
          res.json({
            status: 200,
            body: { token: token }
          });
        } else {
          res.json({
            status: 200
          });
        }
      } catch (err) {
        // console.log('Password: ' + user.password);
        // console.log('Salt: ' + user.salt);
        console.log(err);
      }
    });
  });

module.exports = router;
