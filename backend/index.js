require("dotenv").config();

const cors = require("cors");
const { HoldingsModel } = require("./model/HoldignsModel");
const { positionsModel } = require("./model/postionsModel");
const {ordersModel} = require("./model/ordersModel")
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL;

const {userVerification} = require("./middlewares/AuthMiddleware")
const {Signup,Login} = require("./Controllers/AuthController")

app.use(cors({
   origin: ["http://localhost:5173", "http://localhost:4000"],   // ✅ frontend origin
  credentials: true 
}));
app.use(bodyParser.json())
app.use(cookieParser()); 

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("mongodb conncetion erro:", err);
  });


app.get('/allholdings', async(req,res)=>{
  let allholdings = await HoldingsModel.find({});
  res.json(allholdings);
})

app.get('/allpositions', async(req,res)=>{
  let allpositions = await positionsModel.find({});
  res.json(allpositions);
})
app.post("/neworder", async(req,res)=>{
  let newOrder =new  ordersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode
  })
  newOrder.save();
  console.log("order placed");
})

app.post("/signup",Signup)
app.post("/login",Login)

app.get("/",userVerification,async (req,res)=>{
 res.json({ status: true, message: "this is root", user: req.user.username });
})

app.get("/user",userVerification,async(req,res) => {
  res.json({status:true, user:req.user})
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
