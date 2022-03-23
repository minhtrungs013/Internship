const emailModel = require("../models/emailModel");

const emailController = {
  sendeMail: async (req, res) => {
    try {
      const { email, subject, name, mentor, reviewtime, meetingUrl } = req.body;
      // Thực hiện gửi email
      await emailModel.sendMail(
        email,
        subject,
        name,
        mentor,
        reviewtime,
        meetingUrl
      );
      res.status(200).json("success");
    } catch (error) {
      res.send(error);
    }
  },
};
module.exports = emailController;
