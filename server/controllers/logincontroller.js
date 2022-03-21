const db  = require('../config/db')
const md5 = require('md5');

const loginController =  {
  login:  (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    const user = db.get('users').find({
      username:  username
    }).value();
    if (!user) {
        res.render('login', {
            errors: ['User does not exits'],
            values: res.body
        });
    }
    console.log(md5(password));
    if (md5(password) != user.password) {
        res.render('login', {
            errors: ['Wrong password'],
            values: res.body
        });
    }
    res.status(200).json(user);
},

postLogout:(req, res, next) => {
    res.clearCookie("userId");
    res.redirect('/');
}
    };
module.exports = loginController;