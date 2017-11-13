
var fs = require('fs');

exports.login = function(username, password){

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

	}

	return (loggedIn);
};