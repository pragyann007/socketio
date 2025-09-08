import express from "express"
import { Server} from "socket.io"
import http from "http"
import { handleSocket } from "./socketHandler.js";

const app =  express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"*",
        credentials:true
    }
})

io.on("connection",(socket)=>{
    console.log("User connected ")
    handleSocket(socket,io);
    socket.on("disconnect",()=>{
        console.log("Dsconnected client ...." , socket.id);
    })
})

app.get("/",(req,res)=>console.log("socket ..."))


server.listen(8080,()=>console.log("Server is running .. "))