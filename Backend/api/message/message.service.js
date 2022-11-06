const dbService = require('../../services/db.service.js')

module.exports = {
    setMsgs,
    query
}


async function query(server) {
    const collection = await dbService.getCollection('message')
    return await collection.find({}).toArray()
}
async function setMsgs(message) {
    const collection = await dbService.getCollection('message')
    await collection.insertOne(message)


}