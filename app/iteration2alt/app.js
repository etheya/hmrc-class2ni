var app = require('../../lib/subapp.js')(__dirname);

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/change-start-date', function (req, res) {
    req.session.startDay = req.body.startDay;
    req.session.startMonth = req.body.startMonth;
    req.session.startYear = req.body.startYear;
    res.redirect(req.body['next-page']);
});

app.get('/review-start', function (req, res) {
    var months = ["January","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","November","Dec"];
    var date = new Date(req.session.startYear, req.session.startMonth - 1, req.session.startDay);
    res.render('review-start', {
        inputDate: {
            day: req.session.startDay,
            month: months[req.session.startMonth - 1],
            year: req.session.startYear
        }
    });
});

app.get('/confirm', function (req, res) {
    var months = ["January","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","November","Dec"];
    var date = new Date(req.session.startYear, req.session.startMonth - 1, req.session.startDay);
    res.render('confirm', {
        inputDate: {
            day: req.session.startDay,
            month: months[req.session.startMonth - 1],
            year: req.session.startYear
        }
    });
});



app.post('/change-end-date', function (req, res) {
    req.session.startDay = req.body.startDay;
    req.session.startMonth = req.body.startMonth;
    req.session.startYear = req.body.startYear;
    res.redirect(req.body['next-page']);
});


app.get('/review-end', function (req, res) {
    var months = ["January","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","November","Dec"];
    var date = new Date(req.session.startYear, req.session.startMonth - 1, req.session.startDay);
    res.render('review-end', {
        inputDate: {
            day: req.session.startDay,
            month: months[req.session.startMonth - 1],
            year: req.session.startYear
        }
    });
});

app.get('/confirm-end', function (req, res) {
    var months = ["January","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","November","Dec"];
    var date = new Date(req.session.startYear, req.session.startMonth - 1, req.session.startDay);
    res.render('confirm-end', {
        inputDate: {
            day: req.session.startDay,
            month: months[req.session.startMonth - 1],
            year: req.session.startYear
        }
    });
});

module.exports = app;