var express = require("express");
var router = express.Router();
var internshipcourseController = require("../controllers/internshipCourseController");

router.get("/",internshipcourseController.getInternshipcourse);
router.get("/Batch:id", internshipcourseController.getByIDInternshipCourse);
router.post("/create", internshipcourseController.createInternshipCourse);
router.delete("/delete:id", internshipcourseController.deleteInternshipCourse);

module.exports = router;