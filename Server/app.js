const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var session = require('express-session');
var router = require('./router');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(session({secret : 'userSession'}));
app.use('/static', express.static(path.join(__dirname, '../public/src/app')));
// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/html/Chat.html');
// });

app.use('/', router);

// var corsOptions = {
// 	origin: 'http://localhost:4200',
// 	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
// };

//app.use('*',cors(corsOptions));


var userSession;
var allUsers = [{"username": "Orel"}];

io.on('connection', function(socket){
	socket.on('chat message', function(user, msg, color){
		console.log(user + ': ' + msg);
		io.emit('chat message', user, msg, color);
	});
});

http.listen(3000, function(){
	console.log('app is running on *:3000');
});

module.exports.app = app;
// module.exports.cors = cors;
// module.exports.corsOptions = corsOptions;
module.exports.allUsers = allUsers;
module.exports.userSession = userSession;