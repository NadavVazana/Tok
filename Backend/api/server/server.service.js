const { ObjectID } = require('bson')
const dbService = require('../../services/db.service')

module.exports={
    query,
    getServerById
}

async function query(){
    const collection =await  dbService.getCollection('server')
    const servers = await collection.find({}).toArray()
    return servers
}

async function getServerById(serverId){
    const collection = await dbService.getCollection('server')
    const server = await collection.findOne({'_id':serverId})
    
    return server
}