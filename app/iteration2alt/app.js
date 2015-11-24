var app = require('../../lib/subapp.js')(__dirname);

app.get('/', function (req, res) {
  res.render('index');
});

module.exports = app;