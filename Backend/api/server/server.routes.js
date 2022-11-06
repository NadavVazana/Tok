const express = require('express')
const router = express.Router()
const {getServers,getServerById} =require('./server.controller')


router.get('/',getServers)
router.get('/id',getServerById)



module.exports = router