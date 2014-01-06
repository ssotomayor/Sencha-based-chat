var io = require('socket.io').listen(8080, {
    'browser client minification': true
});

io.sockets.on('connection', function (socket) {

    var user;

    socket.on('register', function (u) {
        user = u;
        socket.emit('message', {
            nickname: '======= SERVER ======',
            message: 'Welcome ' + user.nickname + '!'
        });
    });

    socket.on('msg', function (m) {
        socket.broadcast.emit('msg', m);
    });

});