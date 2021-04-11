const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
    transports: ['websocket'],
  },
});
const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms);
});
io.on('connection', (socket) => {
  console.log('socet connection', socket.id);
});

server.listen(8888, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('SERVER IS RUNNING');
});
