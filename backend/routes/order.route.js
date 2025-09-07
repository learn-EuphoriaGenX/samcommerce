const express = require('express')
const { viewOrder, ceateOrder } = require('../controller/order.controller')
const router = express.Router()

router.post("/create", ceateOrder)
router.get("/view", viewOrder)

module.exports = router