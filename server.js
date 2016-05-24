
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'testsession',
    resave: true,
    saveUninitialized: true
}));

var sess;

app.get('/', function(req, res) {
    res.render('login.ejs');
});

app.post('/login', function(req, res) {
	sess=req.session;
	sess.name=req.body.name;
    sess.email=req.body.email;
});

app.get('/home', function(req, res) {
	 res.render('home.ejs',{name:sess.name,email:sess.email});
 });

app.listen(8080);