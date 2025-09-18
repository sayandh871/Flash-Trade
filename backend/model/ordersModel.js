const {model} = require("mongoose");
const {ordersSchema} = require("../schemas/ordersSchema");

const ordersModel = model("order",ordersSchema);

module.exports = {ordersModel};