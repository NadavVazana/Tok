const dbService = require('../../services/db.service.js')

module.exports = {
    setMsgs,
    query
}


async function query(server) {
    console.log(server);
    const collection = await dbService.getCollection('message')
    // console.log(await collection.find({"server":{"_id":server._id}}).toArray());
    return await collection.find({}).toArray()
}
async function setMsgs(message) {
    const collection = await dbService.getCollection('message')
    await collection.insertOne(message)


}