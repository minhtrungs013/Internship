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

Mentor.update = (id, result) => {
  connect.query(
    " UPDATE mentor SET fullNameMentor = ?,dayOfBirth =?,gender=?,address=?,workplace=?,email=?,postion=?,idDG=? WHERE idMentor=?",
    [
      id.fullNameMentor,
      id.dayOfBirth,
      id.gender,
      id.address,
      id.workplace,
      id.email,
      id.postion,
      id.idDG,
      id.idMentor,
    ],
    (err) => {
      if (err) {
        result(null);
      } else {
        result(id);
      }
    }
  );
};

module.exports = Mentor;
