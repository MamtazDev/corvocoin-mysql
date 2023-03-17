const loginControllers = require("../Controllers/loginController");

const router = require("express").Router();

// register
router.post("/signup", loginControllers.addUser);

// login
router.post("/login", loginControllers.loginUser);

// get all users
router.get("/", loginControllers.getAllUser);

// get a single user
router.get("/:id", loginControllers.getSingleUser);

module.exports = router;
