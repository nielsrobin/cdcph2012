var _ = require('underscore');
var io = require('socket.io').listen(8888);

io.sockets.on('connection', function (socket) {
    socket.on('say', function (msg) {
        socket.broadcast.emit('say', msg);
    });
});