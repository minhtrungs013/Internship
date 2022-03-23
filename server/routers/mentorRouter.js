var express = require("express");
var router = express.Router();
var mentorController = require("../controllers/mentorController");

router.get("/", mentorController.mentor);
router.get("/:id", mentorController.detail);
router.post("/create", mentorController.create);
router.put("/update", mentorController.update);
router.delete("/delete/:id", mentorController.remove);

module.exports = router;
