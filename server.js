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
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('userd').socket(socket.id, userName);
    const users = rooms.get(roomId).get('userd').values();
    socket.to(roomId).broadcast.emit('ROOM:JOINED', users);
  });
  console.log('socet connection', socket.id);
});

server.listen(8888, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('SERVER IS RUNNING');
});
