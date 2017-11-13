var express = require('express');
var router = express.Router();


var signIn = require('./signin');
var login = require('./login');

var app = require('./app');

var userSession;

router.get('/login', loginRouter);
router.get('/', Authentication, homePage);
router.post('/signup', Authentication, signUpRouter);


function Authentication(req, res, next){

	if (userSession == undefined){
		res.redirect('/login');
	}
	else {
		next();
	}
}

function homePage(req, res){
	res.send('Home page');
}

function loginRouter(req, res){

	var username = req.query.username;
	var password = req.query.password;

	// if (!username || !password){
	// 	res.send('Login Page');
	// }
	// else if (login.login(username, password)){
	//
	// 	userSession = req.session;
	// 	userSession.username = username;
	// 	res.send('Logged in');
	// }
	// // Username already exist
	// else {
	// 	res.send("Username or password isn\'t correct");
	// }

	res.send(login.login(username, password));
}

function signUpRouter(req, res){

	var username = req.body.username;
	var password = req.body.password;

	if (signIn.signIn(username, password)){
		res.send('Signed in');
	}
	// Username already exist
	else {
		res.send('Username already exist');
	}
}

// Catch all routes expect Login
// router.get('*', function(req, res, next){
//
// 	if (userSession != undefined){
// 		//res.redirect(req.originalUrl);
// 		next();
// 	}
// 	else {
// 		res.redirect('/login');
// 	}
// });

module.exports = router;