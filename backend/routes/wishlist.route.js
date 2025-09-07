const express = require('express')
const { addItemWishlist, viewItemsWishlist } = require('../controller/wishlist.controller')
const router = express.Router()

router.post("/add-item", addItemWishlist)
router.get("/all-items", viewItemsWishlist)

module.exports = router