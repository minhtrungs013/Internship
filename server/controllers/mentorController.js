const mentorModel = require("../models/mentorModels");

exports.update = (req, res) => {
  const id = req.body;
  mentorModel.update(id, (response) => {
    res.send({ result: response });
  });
};
