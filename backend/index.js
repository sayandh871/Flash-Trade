require("dotenv").config();

const cors = require("cors");
const { HoldingsModel } = require("./model/HoldignsModel");
const { positionsModel } = require("./model/postionsModel");
const {ordersModel} = require("./model/ordersModel")
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json())

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


app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
