const User = require("../model/UserModel");
const { createSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcryptjs");

const Signup = async (req, res) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "user already exist" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "user signed successfully", success: true, user });
    console.log("user registered");
  } catch (error) {
    console.error(error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "Incorrect email or password" });
    }

    const auth =await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token",token,{
      withCredentials:true,
      httpOnly:false
    })
    res.status(201).json({ success:true,message:"user logged in successfully"});

  } catch (error) {
    console.log(error);
  }
};

module.exports = { Signup ,Login};
