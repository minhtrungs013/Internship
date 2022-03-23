const md5 = require("md5");
const userModel = require("../models/loginModel");

const loginController = {
  login: (req, res) => {
      const { username,password} = req.body
    if (!username) {
      return res.status(400).json("You need to enter username");
    }
    if (!password) {
      return res.status(400).json("You need to enter password");
    } else {
      const passwordMd5 = md5(req.body.password);
      userModel.login(username, passwordMd5, (response) => {
        res.send({ token: response });
      });
    }
  },
};
module.exports = loginController;
