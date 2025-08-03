const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");


const server = http.createServer(app);
 
const io = socketio(server);

app.set("view Engine", "ejs");
app.set("views", path.join(__dirname, "views")); // your 'views' folder path

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
    socket.on('send-location', (data) => {
        io.emit('recieve-location', {id: socket.id, ...data});
    });
    socket.on('disconnect', () => {
        io.emit('user-disconnects',socket.id);
    });
});

app.get("/", function(req, res) {
    res.render("index.ejs");
});
server.listen(3000);