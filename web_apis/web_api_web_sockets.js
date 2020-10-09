const HOST = 'localhost'
const PORT = '8080'
const HOSTNAME = HOST + ':' + PORT

const ws_server_url = 'ws://' + HOSTNAME

const web_socket = new WebSocket(ws_server_url, /* [sub-protocols] */);

web_socket.addEventListener('open', function (event) {
    // You can send data as a string, Blob, or ArrayBuffer.
    web_socket.send('Hello, Server!');
});

web_socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

web_socket.addEventListener('error', function (event) {
    console.log('Error occured ', event.data);

    web_socket.close(/* [code[, reason]] */)
});

web_socket.addEventListener('close', function (event) {
    console.log('Server was closed ', event.data);
});

console.log(web_socket)