const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 8000;
//const index = require("./routes/index");

const app = express();
//app.use(index);

app.use(express.static('public'));

const server = http.createServer(app);

const io = socketIo(server);


let counter = 123;

app.get('/', function(request, response) {
    response.send(counter.toString());
  });


io.on("connection", (socket) => {

    console.log("New client connected");

    counter++;
    socket.emit("Update", counter.toString());
    
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
