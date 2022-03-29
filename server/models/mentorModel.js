const connect = require("../config/db");

const Mentor = (mentor) => {
  this.idMentor = mentor.idMentor;
  this.fullName = mentor.fullName;
  this.dayOfBirth = mentor.dayOfBirth;
  this.gender = mentor.gender;
  this.address = mentor.address;
  this.workplace = mentor.workplace;
  this.email = mentor.email;
  this.postion = mentor.postion;
  this.idDG = mentor.idDG;
};

Mentor.create = (data, result) => {
 
  connect.query("INSERT INTO mentor SET ?", data, (err, mentor) => {
    console.log(data);
    if (err) {
      result(null);
    } else {
      
      result({ idMentor: mentor.insertId, ...data });
    }
  });
}


module.exports = Mentor;