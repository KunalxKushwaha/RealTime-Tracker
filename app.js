const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");
const path = require("path");


const server = http.createServer(app);
 
const io = socketio(server);

app.set("view Engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.send("Hello");
});
server.listen(3000);