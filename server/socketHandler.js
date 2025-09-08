const roomusers = [] ; 
export const handleSocket = (socket,io)=>{
    console.log("User connected", socket.id);
    socket.on("joinroom",(roomID)=>{
        socket.join(roomID);
        socket.roomID = roomID;
    if(!roomusers[roomID]) roomID[roomID]={}
    roomusers[roomID][socket.id]={} 

    })

}

