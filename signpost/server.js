var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

var api = require('./server/routes/api');

// all api routes will be accessed at /api
app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on ' + port);

var mongoose = require('mongoose');
// mongoose.connect('mongodb://team301:301signpost@ds127260.mlab.com:27260/signpost');
mongoose.connect('mongodb://localhost:27017');

