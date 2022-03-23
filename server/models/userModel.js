const connect = require("../config/db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const user = (users) => {
  this.idUser = users.idUser;
  this.userName = users.userName;
  this.password = users.password;
  this.email = users.email;
};
user.login = (username, password, results) => {
  connect.query(
    "SELECT * FROM users WHERE username = ? and password = ?",
    [username, password],
    (errors, users) => {
      if (users.length > 0) {
        const token = jwt.sign(
          { idUser: users.idUser },
          process.env.ACCESS_TOKEN_SECRET
        );
        return results(token);
      } else{
        return results("Incorrect userName or password",errors);
      }
    }
  );
};

module.exports = user;
