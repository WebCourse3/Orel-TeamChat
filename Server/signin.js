
var fs = require('fs');
var usersJsonFile = 'users.json';

exports.signIn = function(username, password){

	var userNameExist = false;

	var usersList = JSON.parse(fs.readFileSync(usersJsonFile, 'utf8'));

	for (var index = 0; index < (usersList.length) && (!userNameExist); index++){

		if (usersList[index].username === username){
			userNameExist = true;
		}
	}

	if (userNameExist){
		return false;
	}
	else{
		// Add the user
		fs.appendFile(usersJsonFile, JSON.stringify({"username" : username, "password" : password}));

		return true;
	}
};