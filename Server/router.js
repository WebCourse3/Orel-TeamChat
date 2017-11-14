var express = require('express');
var router = express.Router();
var path = require('path');

var signIn = require('./signin');
var login = require('./login');

var app = require('./app');



router.get('/login', loginRouter);
router.get('/', Authentication, homePage);
router.post('/signup', Authentication, signUpRouter);


function Authentication(req, res, next){

	if (app.userSession == undefined){
		res.redirect('/login');
	}
	else {
		next();
	}
}

function homePage(req, res){
	//res.sendFile(path.join(__dirname + '/portal-client/dist/index.html'));
	res.send('Home page');
}

function loginRouter(req, res){

	var username = req.query.username;
	var password = req.query.password;


	//res.sendFile(path.join(__dirname , '../public/src/app/' + 'app.component.html'));

	var result = login.login(username, password, req.session);

	res.send(result);
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

module.exports = router;
