const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userVerification = (req, res,next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);
    if (!user) {
      return res.status(404).json({ status: false, message: "user not found" });
    }
    req.user = user;
    next();
  });
};
module.exports = { userVerification };
