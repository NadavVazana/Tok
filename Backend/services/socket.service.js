var gIo = null

async function setupSocketAPI(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*'
        }
    })

    gIo.on('connection', socket => {
        // console.log('Connected!');
        socket.on('send-message',(messageInfo)=>{
            gIo.to(messageInfo.server._id).emit('server-message',messageInfo)
        })

        socket.on('join-server',(serverId)=>{
            socket.join(serverId)
        })

        socket.on('typing',(typeInfo)=>{
            socket.broadcast.to(typeInfo.server._id).emit('apply-typing',typeInfo.user)
        })

        socket.on('stop-typing',(server)=>{
            socket.broadcast.to(server._id).emit('apply-stop-typing','')
        })

        

        






    })
    async function getUserSocket(siteId) {
        const sockets = await _getAllSockets()
        const socket = sockets.find(s =>{
           return s.siteId === siteId.toString()})

        return socket
    }

    async function _getAllSockets() {
        const sockets = await gIo.fetchSockets()
        return sockets
    }


}
module.exports = {
    setupSocketAPI
}