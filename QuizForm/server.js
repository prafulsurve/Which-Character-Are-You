var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));
app.get('/:quizid', function(req, res) {
  debugger;
    console.log(req.params.quizid);
    var SERVER_URL = 'http://localhost:3002/quiz/' + req.params.quizid;
    io.on('connection', function (socket) {
        socket.emit('setquizid', {
            quizurl: SERVER_URL
        });
    });
    debugger;
    res.sendFile(__dirname + "/" + "index.html");
});

server.listen(3005, function () {
  console.log('Server listening at port 3005');
});
