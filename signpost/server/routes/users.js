var User = require('../models/user');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.route('/users')
  .post(function(req, res) {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.salt = user.generateSalt(32);  // This could probably be done automatically
    user.password = user.sha512(req.body.password);
    user.save(function(err) {
      if (err){
        res.json({ error: 'User was not created' });  
        
      } 
      res.json({ message: 'User created!' }); // TODO: should probably log in automatically
    });
  })
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);
      try {
        console.log(req.header('token'));
        jwt.verify(req.header('token'), 'placeholdersecret'); // TODO: write a local saved secret at some point
        res.json(users);
      } catch(err) {
        res.json({ status: 401 }); // TODO: send proper error status
      }
    });
  });

router.route('/users/:email')
  .post(function(req, res) {
    //Idk what to do here yet

  })
  .put(function(req, res) {
        User.findOne({ 'email': req.params.name }, function(err, user) {

            if (err){
              // res.send(err);
              res.json({error: 'Could not find email'})
            }
                
            user.name = req.body.name;  // update the bears info
            user.email = req.body.email;
			      user.password = req.body.password;
            // save the user
            user.save(function(err) {
                if (err){
                  // res.send(err);
                  res.json({error: 'Could not Update user'})
                }
                    
                res.json({ message: 'User updated!' });
            });

        });

  })
  .get(function(req, res) {
    User.findOne({ 'email': req.params.name }, function(err, user)  {
            if (err){
              // res.send(err);
              res.json({error: 'Could not find user'})
            }
                
            res.json(user);
    });
  })
  .delete(function(req, res) {
        User.remove({
            email: req.params.email
			// _id: req.params.name

        }, function(err, users) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;
