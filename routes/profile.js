var model = require('../models/models.js');

exports.profile = function(req, res) {
    if (!req.session.user){
            res.render('login.html');
    }else {
        if (!req.query.user) {

         //res.render("profile.html");
         model.users.findOne({username: req.session.user.username}, function(err, user){
            dbError(err, res);
            res.render('profile.html', {
                    username: user.username,
                    firstname: user.firstName,
                    lastname: user.lastName
                });
         })

        } else {
            model.users.findOne({username: req.query.user}, function (err, user) {
                dbError(err, res);

                if (!user) {
                    res.send({error: true, msg: "The account" + req.query.user + " does not exist"});
                } else {
                    console.log(user);

                    res.render('viewProfile.html', {
                        username: user.username,
                        firstname: user.firstName,
                        lastname: user.lastName
                        
                    });
                }

            });
        }
        }


}

exports.getUser = function(req, res) {


    if (!req.session.user){
        res.render('login.html');
    }else{
        res.send(req.session.user);

    }
}


function dbError(err, res) {
    if (err) {
        console.log(err);
        res.json({"error": true, "msg": err});
        //res.json({"error": true, "msg": "An error has occured. Please try again later."});
    }
}

exports.updateInfo = function(req, res) {
     var value = req.body.value;
     var data = req.body.data;

     model.users.findOne({username: req.params.username}, function(err, user){
  
        if (value == "firstName"){
            user.firstName = data;
        }else if (value == 'lastname'){
            user.lastName = data;

        }

        user.admin = "false";


        user.save(function(err, updateObject){
            if(err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.send(user);
                console.log(user);

            }


        })


     })



}
