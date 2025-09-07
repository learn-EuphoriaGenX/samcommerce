const express = require('express')
const { addProduct, getProduct, deleteProduct, updateProduct } = require('../controller/product.controller')
const router = express.Router()

router.post("/add", addProduct)
router.get("/all", getProduct)
router.delete("/delete/:id", deleteProduct)
router.put("/update/:id", updateProduct)

module.exports = router