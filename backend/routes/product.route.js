const express = require('express')
const { userLogin, userRegister } = require('../controller/user.controller')
const router = express.Router()

router.get("/add", userLogin)
router.get("/all", userRegister)
router.get("/delete/:id", userRegister)

module.exports = router