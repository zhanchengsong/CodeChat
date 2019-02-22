var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    console.log('User connected with socket: ' + socket.id);
    socket.on('disconnect',function(){
        console.log(socket.id + " Disconnected");
    })
})



http.listen(3000, function(){
    console.log('listening on *:3000');
});