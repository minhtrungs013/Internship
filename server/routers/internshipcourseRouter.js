var express = require("express");
var router = express.Router();
var internshipcourseController = require("../controllers/internshipcourseController");

router.get("/", internshipcourseController.internshipcourse);
router.get("/:id", internshipcourseController.detail);
// router.post("/create", internshipcourseController.create);
router.put('/update',internshipcourseController.update)
router.delete("/delete/:id", internshipcourseController.remove);

module.exports = router;

