const http = require('http');
const path = require('path')

const express = require('express');
const { Server } = require('socket.io')

const app = express();


app.use(express.static(path.resolve('public')))

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('client-message', (data) => {
    io.emit('server-message', { message: data.message, id: socket.id });
  });
});



app.get('/', (req, res) => {
  return res.sendFile('public/index.html')
})

server.listen(3000, () => console.log('Server is running :3000'))