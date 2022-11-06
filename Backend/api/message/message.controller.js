const messageService = require('./message.service')

module.exports = {
    setMsgs,
    getMsgs
}

async function getMsgs(req, res) {

    try {
        const msgs = await messageService.query(req.query)
        res.send(msgs)
    }
    catch (err) {
        console.log(err);
    }
}


async function setMsgs(req, res) {
    try {
        await messageService.setMsgs(req.body)

    }
    catch (err) {
        console.log(err);
    }




}