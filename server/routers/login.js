const logincontroller = require("../controllers/logincontroller");

const router = require("express").Router();


router.post("/login", logincontroller.login);


module.exports = router;