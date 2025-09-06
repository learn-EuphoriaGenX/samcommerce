const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: "Orders"
    }],
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Products"
    }],
    wishlists: [{
        type: mongoose.Types.ObjectId,
        ref: "Wishlists"
    }]
})
module.exports = model("Users", userSchema)