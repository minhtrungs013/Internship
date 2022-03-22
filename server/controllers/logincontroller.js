const md5 = require('md5');
const UserModel = require('../models/loginModel')

const loginController =  {
  login:  (req, res) => {
    const username = req.body.username;
    const password = md5(req.body.password);
    UserModel.login(username, password,(response) => {
        res.send({token: response});
      }) 
}
    };
module.exports = loginController;