const internshipcourseModel = require("../models/internshipcourseModel");

const internshipcourseController = {
  internshipcourse: (req, res) => {
    internshipcourseModel.get_all((data) => {
      res.send({ result: data });
    });
  },

  detail: (req, res) => {
    internshipcourseModel.getByID(req.params.id, (response) => {
      res.send({ result: response });
    });
  },
  create: (req, res) => {
    const data = req.body;
    internshipcourseModel.create(data, (response) => {
      res.send({ result: response });
    });
  },
};
module.exports = internshipcourseController;
