const express = require('express');
const http = require("http");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('config');
const socketIo = require("socket.io");
const { setUpApi } = require("./websockets_api");

const port = process.env.PORT || config.get('application_port');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    setUpApi(socket, io);
});

server.listen(port);
