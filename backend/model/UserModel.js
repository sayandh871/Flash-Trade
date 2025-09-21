const { model } = require("mongoose");
const { userSchema } = require("../schemas/ordersSchema");

const Usermodel = model("user", userSchema);

module.exports = { Usermodel };
