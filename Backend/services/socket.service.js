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