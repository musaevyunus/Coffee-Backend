const mongoose = require("mongoose");

const drinksShema = mongoose.Schema({
  name: String,
  price: Number,
  reserve: Boolean,
  caffeine: Boolean,
  volume: Number,
  description: String,
});

const Drink = mongoose.model("Drink", drinksShema);
module.exports = Drink