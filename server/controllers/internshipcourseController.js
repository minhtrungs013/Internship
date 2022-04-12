const internshipcourseModel = require("../models/InternshipCourseModel");
const internshipCourseController = {
  getInternshipcourse: (req, res) => {
    internshipcourseModel.getNameInternshipcourse((data) => {
      res.send(data);
    });
  },
  getByIDInternshipCourse: (req, res) => {
    internshipcourseModel.getIdInternshipcourse(req.params.id, (response) => {
      res.send(response);
    });
  },
  createInternshipCourse: (req, res) => {
    const data = req.body;
    internshipcourseModel.createInternshipcourse(data, (response) => {
      res.send(response);
    });
  },
  deleteInternshipCourse: (req, res) => {
    const id = req.params.id
    if (id === " ") {
      return res.status(400).json("You need to choose who to delete!");
    }
    internshipcourseModel.DeleteInternshipcourse(id, (response) => {
      res.send(response);
    });
  },
};
module.exports = internshipCourseController;
