const conect = require('../config/db');
const jwt = require("jsonwebtoken")

const User = (users) =>{
  this.idUser = users.idUser;
  this.userName = users.userName;
  this.password = users.password;
  this.email = users.email;
}
User.login = (username, password,results) =>{
  conect.query('SELECT * FROM users WHERE username = ? and password = ?', [username, password],(errors,users) =>{
    if(users.length > 0){
        var token = jwt.sign({ idUser: users.idUser}, 'tk' )
        results(token)
        //  res.redirect('internshipCourse')
    }else{
        // res.redirect('login')
        results('lỗi')
    }
})
}

module.exports = User;
