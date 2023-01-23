const { Router } = require("express");
const { drinkController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinkController.getDrink);
router.get("/drinks/reserve", drinkController.getReserve);
router.get("/drinks/:id", drinkController.getDrinkId);
router.post("/drinks", drinkController.addDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.updateDrink);

module.exports = router;
