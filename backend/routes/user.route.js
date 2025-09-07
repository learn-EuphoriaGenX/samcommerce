const express = require('express')
const { userLogin, userRegister } = require('../controller/user.controller')
const router = express.Router()

router.post("/login", userLogin)
router.post("/register", userRegister)
router.get("/profile", userProfile)

module.exports = router