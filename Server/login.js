
var fs = require('fs');
var app = require('./app');

exports.login = function(username, password, session){

	var loggedIn = false;

	var usersList = JSON.parse(fs.readFileSync('users.json', 'utf8'));

	for (var index = 0; index < (usersList.length) && (!loggedIn); index++){

		// If the username and password are correct
		if ((usersList[index].username === username) &&
			(usersList[index].password === password)){
			loggedIn = true;
		}
	}

	if (loggedIn){
		// TODO: Create session

		app.userSession = session;
		app.userSession.username = username;

		app.allUsers.push({"username" : username});

	}

	return (loggedIn);
};