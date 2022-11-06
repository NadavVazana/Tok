const express = require('express')
const { setMsgs,getMsgs } = require('./message.controller')
const router = express.Router()


router.post('/',setMsgs)
router.get('/',getMsgs)

module.exports = router