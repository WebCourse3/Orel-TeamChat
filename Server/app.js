const express = require('express');
const app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var session = require('express-session');
var router = require('./router');
var bodyParser = require('body-parser');


app.use('/static', express.static('html'));
app.use('/static', express.static('css'));
app.use(session({secret : 'userSession'}));

// app.get('/', function (req, res) {
// 	res.sendFile(__dirname + '/html/Chat.html');
// });

app.use('/', router);

io.on('connection', function(socket){
	socket.on('chat message', function(user, msg, color){
		console.log(user + ': ' + msg);
		io.emit('chat message', user, msg, color);
	});
});

http.listen(3000, function(){
	console.log('app is running on *:3000');
});

module.exports = app;