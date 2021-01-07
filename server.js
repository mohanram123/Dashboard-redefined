// load the things we need
var express = require('express');
var app = express();
app.use(express.static('assets'));

//Serves all the request which includes /images in the url from Images folder
app.use('/img', express.static(__dirname + '/img'));
app.use('/demo', express.static(__dirname + '/demo'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/scss', express.static(__dirname + '/scss'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app
.get('/', function(req, res) {
    res.render('dashboard');
})
.get('/users', function(req, res) {
    res.render('user');
})
.get('/tables', function(req, res) {
    res.render('tables');
})
.get('/map', function(req, res) {
    res.render('map');
})
.get('/type', function(req, res) {
    res.render('typography');
})

app.listen(5001);
console.log('5001 is the magic port');