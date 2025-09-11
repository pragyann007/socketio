const roomusers = {} ; 
export const handleSocket = (socket,io)=>{
    console.log("User connected", socket.id);

    socket.on("joinroom",(roomID)=>{

        socket.join(roomID);

        socket.roomID = roomID;

    if(!roomusers[roomID]) roomusers[roomID]={}
    roomusers[roomID][socket.id]={} 

    })

    socket.on("locationupdate",async (data)=>{
        const {lat,long} = data ;
        const roomID = socket.roomID ;

        if(!roomID) return ; 

        roomusers[roomID][socket.id] = {lat,long};
    })
   
}

