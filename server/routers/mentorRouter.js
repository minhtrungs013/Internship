var express = require("express");
var router = express.Router();
var mentorController = require("../controllers/mentorController");

router.put("/update", mentorController.update);

module.exports = router;
