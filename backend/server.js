const express = require('express')
let app = express() // object instanciate
const { dbConnection } = require('./config/db.config')
let cors = require('cors')

// settings
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const orderRouter = require('./routes/order.route')
const wishlistRouter = require('./routes/wishlist.route')

app.use("/user", userRouter)
app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/wishlist", wishlistRouter)

let port = process.env.PORT
dbConnection()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on http://localhost:${port}✅`);
        })
    })

// https://learn.mongodb.com/learn/course/mongodb-shell-cheatsheet/main/mongodb-shell-cheatsheet