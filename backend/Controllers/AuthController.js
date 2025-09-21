const { use } = require("react");
const User = require("../model/UserModel");
const { createSecretToken } = require("../Util/SecretToken");

module.exports.Signup = async (req, res, next) => {
  try {

    const {email,username,password,createdAt} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.json({message:"user already exist"});
    }
    const user = await User.create({email,password,username,createdAt});
    const token = createSecretToken(User._id);
    res.cookie("token",token,{
        withCredentials:true,
        httpOnly:false,
    });
    res.status(201)
    .json({message:"user signed successfully", success:true, user})
    next();


  } catch (error) {
    console.error(error);
  }
};
