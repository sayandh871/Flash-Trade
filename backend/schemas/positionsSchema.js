const {Schema} = require("mongoose")

const positionsSchema = new Schema({
    product:String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})

module.exports = {positionsSchema};