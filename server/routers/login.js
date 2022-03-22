const logincontroller = require("../controllers/loginController");

const router = require("express").Router();

router.post("/login", logincontroller.login);

module.exports = router;
