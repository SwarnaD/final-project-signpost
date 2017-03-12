var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.route('/users')
  .post(function(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'User created!' });
    });
  })
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);
      try {
        jwt.verify(req.header('token'), 'placeholdersecret') // TODO: write a local saved secret at some point
        res.json(users);
      } catch(err) {
        res.json({ status: 401 }); // TODO: send proper error status
      }
    });
  });

router.route('/users/:name')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        User.findByName(req.params.name, function(err, user) {

            if (err)
                res.send(err);
            user.name = req.body.name;  // update the bears info
            user.email = req.body.email;
			user.password = req.body.password;
            // save the user
            user.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'User updated!' });
            });

        });

  })
  .get(function(req, res) {
    User.findByName(req.params.name, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
    });
  })
  .delete(function(req, res) {
        User.remove({
            name: req.params.name
			// _id: req.params.name

        }, function(err, users) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;