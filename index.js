var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(4000, function(){
	console.log('Listening on port 4000');
});
app.use(express.static('public'));
var io=socket(server);
io.on('connection',function(socket){
	console.log('Socket connection made', socket.id);

	// Handle chat event
	socket.on('chat', function(data){
		io.sockets.emit('chat',data);
	});

	// Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
});
});

