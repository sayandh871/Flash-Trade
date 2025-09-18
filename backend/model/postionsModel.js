const {model} = require("mongoose");
const {positionsSchema} = require("../schemas/positionsSchema");

const positionsModel = new model("positons",positionsSchema);

module.exports = {positionsModel};