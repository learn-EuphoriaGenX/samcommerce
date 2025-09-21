const orderModel = require("../models/order.model")
const userModel = require("../models/user.model")

module.exports.ceateOrder = async (request, response) => {
    try {
        let { userId } = request.user._id
        let { pid } = request.params

        let newOrder = await orderModel.create({
            product: pid,
            user: userId
        })
        let user = await userModel.findById(userId)
        user.orders.push(newOrder._id)
        await user.save()
        return response.status(201).send({ message: "Order Booking Successfull!", success: true })
    } catch (error) {
        return response.status(500).send({ message: "Internal Server Problem", success: false })
    }
}
module.exports.viewOrder = async (request, response) => {
    try {
        let { userId } = request.user._id
        let orders = await orderModel.find({ user: userId })
        return response.status(200).send({ message: "List of Orders", orders })
    } catch (error) {
        return response.status(500).send({ message: "Internal Server Problem", success: false })
    }
}
