const db  = require('../config/db')
const md5 = require('md5');

const loginController =  {
  login:  (req, res) => {
    const username = req.body.username;
    console.log(username, password)
    db.query('SELECT * FROM users WHERE username = ? and password = ?', [username, password],(errors,results) =>{
        if(results.length > 0){
            res.status(200).json('tài khoản và mật khẩu chính xác')
            // res.redirect('internshipCourse')
        }else{
            // res.redirect('login')
            res.status(400).json('sai tài khoản hoặc mật khẩu!')

        }
    })
   
},
postLogout:(req, res, next) => {
    res.clearCookie("userId");
    res.redirect('/');
}
    };
module.exports = loginController;