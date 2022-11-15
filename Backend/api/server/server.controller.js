const serverService = require('./server.service')

module.exports={
    getServers,
    getServerById
}

async function getServers(req,res){
   const servers =await  serverService.query()
   res.send(servers)
}

async function getServerById(req,res){
    const server = await serverService.getServerById(req.query.id)
    
    res.send(server)
}