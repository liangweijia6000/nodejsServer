const net = require('net');

const socket = new net.Socket();

const port = 9527;

const hostname = '127.0.0.1';

socket.connect(port, hostname, function () {
    socket.write('我是客户端');
});

socket.on('data', function (msg: any) {
    console.log(msg);
});

socket.on('error', function (error: any) {
    console.log('error' + error);
});

socket.on('close', function () {
    console.log('连接关闭了');
});
