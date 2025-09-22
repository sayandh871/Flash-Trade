const { model } = require("mongoose");
const { userSchema } = require("../schemas/userSchema");

const Usermodel = model("user", userSchema);

module.exports =  Usermodel ;
