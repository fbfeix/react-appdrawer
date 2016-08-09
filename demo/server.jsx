import express from 'express';

var server = express();

server.configure(() => {
    server.use('/', express.static(__dirname + '/'));

});

server.listen(3000);