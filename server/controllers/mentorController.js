
const mentorModel = require("../models/mentorModel");

const mentorController = {
 create:(req, res) => {
    const data = req.body;
    console.log(data);
    mentorModel.create(data, (response) => {
      res.send({ result: response });
    });
 }
};
module.exports = mentorController;
