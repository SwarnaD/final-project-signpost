'use strict';

// Declare app level module which depends on views, and components
var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// Reference to routes
var clubs = require('./routes/clubs.js');
var login = require('./routes/login.js');
var profile = require('./routes/profile.js');

var app = express();
// View engine
app.use(express.static(__dirname + '/'));

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


// custom validators
app.use(expressValidator({
    customValidators: {

        isStuEmail: function(value) {
            return value.search( /.+(@mail.utoronto.ca)/ ) !== -1;
        }

}}));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/login', function(req,res) {
    res.render('login.html');
});

//API URLS
app.post('/login', login.addUser); // Add a user
app.post('/login', login.signin); // User sign in

app.get('/logout', login.signout); // User sign out

app.post('/clubs', club.addClub); // Add a club
app.put('/clubs', club.editClub); // Edit club details
app.get('/clubs', clubs.searchClubs); // Search for clubs
app.delete('/clubs', clubs.deleteClub); // Delete a club

app.get('/profile', profile.addProfile);  // Add a user profile
app.get('/profile', profile.editProfile); // Edit profile attributes

app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');
