const emailController = require("../controllers/emailcontroller");

const router = require("express").Router();

router.post("/sendeMail", emailController.sendeMail);

module.exports = router;
