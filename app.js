var http = require('http');
var url = require('url');
var fs = require('fs');
var io = require('socket.io');

var server = http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    switch(path){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Hello World\nI am node.jsdasdsa');
            res.end();
            break;
        default:
            fs.readFile(__dirname + path, function(error, data) {
                if (error)
                {
                    res.writeHead(404);
                    res.end('the file is missing - 404');
                }
                else
                {
                    res.writeHead(200, {'Content-type': 'text-html'});
                    res.write(data, 'utf8');
                    res.end();
                }
            });
            break;

    }
});


server.listen(8022, '127.0.0.1');
var listener = io.listen(server);
var programSource = '';

listener.on('connection', function (socket) {
    console.log('client connected');
    if(programSource !== ''){
        socket.emit('message',{"cmd":"source","source":programSource});

    }

    socket.on('disconnect',function () {
        console.log("disconected");
    });
    socket.on('error', function () {

    });
    socket.on('end', function () {

    });

    socket.on('btn_event',function (data) {
        console.log('butttoon');
        socket.emit('message',{"cmd":"btn","event":'test'});
    });

    socket.on('message',function (data) {
        var cmd = data.cmd;
        console.log(cmd);
        switch(cmd){
            case "send-source":
                if(programSource !== data.source){
                    programSource = data.source;
                    console.log('ukladam source');
                    listener.emit('message',{"cmd":"source","source":programSource});
                }
        }
    });

});