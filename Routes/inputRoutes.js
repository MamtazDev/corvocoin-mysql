const inputControllers = require("../Controllers/inputController");

const router = require("express").Router();

// get all input value
router.get("/", inputControllers.getAllInputValue);

// add a input value
router.post("/add", inputControllers.addInputValue);

module.exports = router;
