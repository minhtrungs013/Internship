var express = require("express");
var router = express.Router();
var mentorController = require("../controllers/mentorController");

router.post("/create", mentorController.create);

module.exports = router;