express = require('express');
const WebSocket = require('ws');

const app = express();
const server = require('http').Server(app);
const wss = new WebSocket.Server({ server:server });

app.use(express.static('index.html'));

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('Received: %s', message);
    // Forward the message to ESP32
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

server.listen(3000, function listening() {
  console.log('Server started on port 3000');
});