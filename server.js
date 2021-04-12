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
app.use(express.json());

app.get('/rooms', (req, res) => {
  res.json(rooms);
});

app.post('/rooms', (req, res) => {
  const { roomId, userName } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]),
    );
  }
  console.log(req.body);
  res.send();
});
io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', (data) => {
    socket.join(data.roomId);
  });
  console.log('socet connection', socket.id);
});

server.listen(8888, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('SERVER IS RUNNING');
});
