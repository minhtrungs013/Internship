const internshipcourseModel = require("../models/internshipcourseModel");

exports.internshipcourse = (req, res) => {
  internshipcourseModel.get_all((data) => {
    res.send({ result: data });
  });
};

exports.detail = (req, res) => {
  internshipcourseModel.getByID(req.params.id, (response) => {
    res.send({ result: response });
  });
};

exports.create = (req, res) => {
  const data = req.body;
  internshipcourseModel.create(data, (response) => {
    res.send({ result: response });
  });
};
