const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require('cors');
const path = require("path");
const { SocketAddress } = require("net");
const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver, {
  cors: {
    origin: "https://example.com",
    methods: ["GET", "POST"]
  }
});

const gamedirectory = path.join(__dirname, "app");
app.use(cors());
app.use(express.static(gamedirectory));

httpserver.listen(3000);


io.on('connection', function(socket){
  console.log(socket.id);
  //console.log('A user joined with id: '+socket.id);
  socket.on("message",(msg) => {
    console.log(msg);
    // let room = Array.from(socket.rooms)[1];
    //  io.to(room).emit("message",msg);
  })
  socket.emit('message','a');
  
})
