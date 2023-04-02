const express = require("express")
var http = require("http")
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000
var server = http.createServer(app)
var io = require("socket.io")(server)

app.use(express.json())
// app.use(cors())
var clients = {};

io.on("connection", (socket)=>{
 console.log("connected");
 console.log(socket.id, "has joined");
 socket.on("signin", (id)=>{
    console.log(msg);
    clients[id]= socket;
 });
 socket.on("message", (msg)=>{
    let targetid = msg.targetid;
    if(clients[targetid]) clients[targetid].emit("message", msg);
    
 })

})

app.route("/test").get((req, res)=>{
    return res.json("hello")
})

server.listen(port, "0.0.0.0", ()=>{
    console.log("server started")
})