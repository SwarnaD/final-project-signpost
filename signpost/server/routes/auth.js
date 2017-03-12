var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

router.route('/auth')
  .post(function(req, res) {
    User.findOne({ 'email': req.body.email }, function(err, user) {
      if (err) res.send(err);
      if (user.password === req.body.password) {
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
    });
  });

module.exports = router;