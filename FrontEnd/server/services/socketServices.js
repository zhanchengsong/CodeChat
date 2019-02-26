// Services to handle io operations from node server

module.exports = function(io) {



    /**
     * On initial connect from a client socket
     * Notice that we also set the disconnect behavior of individual client socket
     *
     *  --------
     * | Server | Server Socket (io)  -  Socket (client socket)
     *  --------
     *
     *
     */
    io.on('connection',function(socket){
        console.log('User connected with socket: ' + socket.id);

        socket.on('disconnect',function(){
            console.log(socket.id + " Disconnected");
        });

        socket.on('clientMsg', message => {
            console.log("Received " + message);
            io.emit('message', message);
        });
    })



}