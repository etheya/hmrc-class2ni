var app = require('../../lib/subapp.js')(__dirname);
var moment = require('moment');
var format = 'DD MMMM YYYY';

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
    var date = moment(req.session.startYear + '-' + req.session.startMonth + '-' + req.session.startDay);
    res.render('review-start', {
        inputDate: date.format(format),
        startDate: date.day(0).format(format)
    });
});

app.get('/confirm-start', function (req, res) {
    var date = moment(req.session.startYear + '-' + req.session.startMonth + '-' + req.session.startDay);
    res.render('confirm-start', {
        startDate: date.day(0).format(format)
    });
});



app.post('/change-end-date', function (req, res) {
    req.session.endDay = req.body.endDay;
    req.session.endMonth = req.body.endMonth;
    req.session.endYear = req.body.endYear;
    res.redirect(req.body['next-page']);
});


app.get('/review-end', function (req, res) {
    var date = moment(req.session.endYear + '-' + req.session.endMonth + '-' + req.session.endDay);
    res.render('review-end', {
        inputDate: date.format(format),
        endDate: date.day(+6).format(format)
    });
});

app.get('/confirm-end', function (req, res) {
    var date = moment(req.session.endYear + '-' + req.session.endMonth + '-' + req.session.endDay);
    res.render('confirm-end', {
        endDate: date.day(+6).format(format)
    });
});



app.post('/change-both-dates', function (req, res) {
    req.session.startDay = req.body.startDay;
    req.session.startMonth = req.body.startMonth;
    req.session.startYear = req.body.startYear;
    req.session.endDay = req.body.endDay;
    req.session.endMonth = req.body.endMonth;
    req.session.endYear = req.body.endYear;
    res.redirect(req.body['next-page']);
});

app.get('/review-both', function (req, res) {
    var fdate = moment(req.session.endYear + '-' + req.session.endMonth + '-' + req.session.endDay);
    var date = moment(req.session.startYear + '-' + req.session.startMonth + '-' + req.session.startDay);
    res.render('review-both', {
        inputStartDate: date.format(format),
        inputEndDate: fdate.format(format),
        endDate: fdate.day(+6).format(format),
        startDate: date.day(0).format(format)
    });
});

app.get('/confirm-both', function (req, res) {
    var fdate = moment(req.session.endYear + '-' + req.session.endMonth + '-' + req.session.endDay);
    var date = moment(req.session.startYear + '-' + req.session.startMonth + '-' + req.session.startDay);
    res.render('confirm-both', {
        inputStartDate: date.format(format),
        inputEndDate: fdate.format(format),
        endDate: fdate.day(+6).format(format),
        startDate: date.day(0).format(format)
    });
});



module.exports = app;