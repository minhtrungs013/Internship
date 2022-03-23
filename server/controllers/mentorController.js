const mentorModel = require("../models/mentorModels");

exports.mentor = (req, res) => {
  mentorModel.get_all((data) => {
    res.send({ result: data });
  });
};

exports.detail = (req, res) => {
  mentorModel.getByID(req.params.id, (response) => {
    res.send({ result: response });
  });
};

exports.create = (req, res) => {
  const data = req.body;
  mentorModel.create(data, (response) => {
    res.send({ result: response });
  });
};
exports.remove = (req, res) => {
  const id = req.params.id;
  mentorModel.remove(id, (response) => {
    res.send({ result: response });
  });
};

exports.update = (req, res) => {
  const id = req.body;
  mentorModel.update(id, (response) => {
    res.send({ result: response });
  });
};
