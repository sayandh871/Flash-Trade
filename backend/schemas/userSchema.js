const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "your username is required"],
  },
  password: {
    type: String,
    required: [true, "your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
userSchema.pre("save",async function() {
    this.password = await bcrypt.hash(this.password,12)
})

module.exports = { userSchema };
