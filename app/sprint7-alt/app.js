var app = require('../../lib/subapp.js')(__dirname);
var moment = require('moment');
var format = 'D MMMM YYYY';

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



app.post('/change-end-date-second', function (req, res) {
    req.session.endDaySecond = req.body.endDaySecond;
    req.session.endMonthSecond = req.body.endMonthSecond;
    req.session.endYearSecond = req.body.endYearSecond;
    res.redirect(req.body['next-page']);
});


app.get('/review-end-second', function (req, res) {
    var date = moment(req.session.endYearSecond + '-' + req.session.endMonthSecond + '-' + req.session.endDaySecond);
    res.render('review-end-second', {
        inputDateSecond: date.format(format),
        endDateSecond: date.day(+6).format(format)
    });
});

app.get('/confirm-end-second', function (req, res) {
    var date = moment(req.session.endYearSecond + '-' + req.session.endMonthSecond + '-' + req.session.endDaySecond);
    res.render('confirm-end-second', {
        endDateSecond: date.day(+6).format(format)
    });
});



app.post('/cease', function (req, res) {
    req.session.ceaseDay = req.body.ceaseDay;
    req.session.ceaseMonth = req.body.ceaseMonth;
    req.session.ceaseYear = req.body.ceaseYear;
    res.redirect(req.body['next-page']);
});

app.get('/review-cease', function (req, res) {
    var date = moment(req.session.ceaseYear + '-' + req.session.ceaseMonth + '-' + req.session.ceaseDay);
    res.render('review-cease', {
        inputDate: date.format(format),
        ceaseDate: date.day(+6).format(format)
    });
});

app.get('/confirm-cease', function (req, res) {
    var date = moment(req.session.ceaseYear + '-' + req.session.ceaseMonth + '-' + req.session.ceaseDay);
    res.render('confirm-cease', {
        ceaseDate: date.day(+6).format(format)
    });
});

module.exports = app;