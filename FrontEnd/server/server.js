var express = require('express');
var app = express();
var path = require("path");
var http = require('http').Server(app);
var io = require('socket.io')(http);
var indexRouter = require('./routes/index');

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
var socketService = require('./services/SocketServices')(io);
app.use(express.static(path.join(__dirname, '../client/codechat/build')));
app.use("/", indexRouter);
app.use(function (req, res) {
    //send index.html to start client side
    res.sendFile("index.html", {root: path.join(__dirname, '../client/codechat/build')});
});




http.listen(3000, function(){
    console.log('listening on *:3000');
});