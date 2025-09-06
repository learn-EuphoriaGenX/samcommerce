const express = require('express')
let app = express() // object instanciate
const { dbConnection } = require('./config/db.config')

const userRouter = require('./routes/user.route')
app.use("/user", userRouter)

let port = process.env.PORT
dbConnection()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on http://localhost:${port}✅`);
        })
    })

// https://learn.mongodb.com/learn/course/mongodb-shell-cheatsheet/main/mongodb-shell-cheatsheet