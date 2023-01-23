const Drink = require("../models/Drink.model");

module.exports.drinkController = {
  getDrink: (req, res) => {
    Drink.find({}, ["name", "price"])
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({ error: "Ошибка при добавлении нового напитка" + err.message }));
  },
  getReserve: (req, res) => {
    Drink.find({ reserve: true })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  getDrinkId: (req, res) => {
    Drink.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  addDrink: (req, res) => {
    Drink.create({
      name: req.body.name,
      price: req.body.price,
      reserve: req.body.reserve,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({ error: "Ошибка при добавлении нового напитка" + err.message }));
  },
  deleteDrink: (req, res) => {
    Drink.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Напиток удален");
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
  updateDrink: (req, res) => {
    Drink.findByIdAndUpdate(req.params.id,{
      name: req.body.name,
      price: req.body.price,
      reserve: req.body.reserve,
      caffeine: req.body.caffeine,
      volume: req.body.volume,
      description: req.body.description,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json({ error: "Ошибка при добавлении нового напитка" }));
  },
};