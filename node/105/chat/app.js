import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __dirname = import.meta.dirname;
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  console.log('got a connection');
let name;
  
 socket.on('nameSet', userName => {
  name=userName || "someone";
  socket.broadcast.emit('msg', `${name} has joind the conversation`);
 
  
  });
  socket.on('msg', msg => {
   
    io.emit('msg',`"${name} said-"${msg}`);
  });
  socket.on("disconnect",()=>{
   socket.broadcast.emit("msg",`${name} left the conversation`)
  })
});


server.listen(80);
