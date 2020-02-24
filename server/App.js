const express = require('express');
const http = require("http");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('config');
const socketIo = require("socket.io");

const port = process.env.PORT || config.get('application_port');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log(`a user connected, id: ${socket.id}`);
    socket.on('sendMessage', (data) => {
        io.in(data.socketId).emit('sendMessage', data.message);
    })
    socket.on('disconnect', () => console.log(`user disconnected, id: ${socket.id}`));
});

server.listen(port);
