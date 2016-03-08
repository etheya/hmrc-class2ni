var app = require('../../lib/subapp.js')(__dirname);
var moment = require('moment');
var format = 'D MMMM YYYY';

app.get('/', function (req, res) {
  res.render('index');
});


module.exports = app;