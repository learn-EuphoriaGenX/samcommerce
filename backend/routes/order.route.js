const express = require('express')
const { viewOrder, ceateOrder } = require('../controller/order.controller')
const { auth } = require('../middleware/auth.middleware')
const router = express.Router()

router.post("/create/:pid", auth, ceateOrder)
router.get("/view", auth, viewOrder)

module.exports = router