express = require('express');
const WebSocket = require('ws');

const app = express();
const server = require('http').Server(app);
const wss = new WebSocket.Server({ server:server });

app.use('/',express.static('public'));

wss.on('connection', function connection(nhantin) {
  console.log("Ayo co nguoi moi vao");

  nhantin.on('message', function(test){
    console.log("Nhận tin từ Client nào đó:" + test);
    
    wss.clients.forEach(function(client){
        client.send("Ai đó vừa nói:" + test);
    });
});
});

  wss.on('close', function close() {
    console.log('Client disconnected');
  });

server.listen(3000, function listening() {
  console.log('Server started on port 3000');
});
/*express = require('express');
const WebSocket = require('ws');

const PORT = 3000;

const wsServer = new WebSocket.Server({
    port: PORT
});

const app = express();

app.use('/',express.static('public'));
wsServer.on('connection', function(nhantin){
    console.log("Ayo co nguoi moi vao");

    nhantin.on('message', function(test){
        console.log("Nhận tin từ Client nào đó:" + test);
        
        wsServer.clients.forEach(function(client){
            client.send("Ai đó vừa nói:" + test);
        });
    });
});

console.log((new Date()) + "Server đang hoạt động ở port: " + PORT);*/