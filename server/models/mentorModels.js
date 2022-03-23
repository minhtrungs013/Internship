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

Mentor.get_all = (result) => {
  connect.query("SELECT * FROM mentor", (err, mentor) => {
    if (err) {
      result(null);
    } else {
      result(mentor);
    }
  });
};

Mentor.getByID = (id, result) => {
  connect.query(
    "SELECT * FROM mentor WHERE idMentor  = ?",
    id,
    (err, mentor) => {
      if (err) {
        result(null);
      } else {
        result(mentor);
      }
    }
  );
};
Mentor.create = (data, result) => {
  connect.query("INSERT INTO mentor SET ?", data, (err, mentor) => {
    if (err) {
      result(null);
    } else {
      result({ idMentor: mentor.insertId, ...data });
    }
  });
};
Mentor.remove = (id, result) => {
  connect.query("DELETE FROM mentor WHERE idMentor = ?", id, (err, mentor) => {
    if (err) {
      result(null);
    } else {
      result("Xóa id" + id + "thành công");
    }
  });
};

Mentor.update = (id, result) => {
  connect.query(
    " UPDATE mentor SET fullName = ?,dayOfBirth =?,gender=?,address=?,workplace=?,email=?,postion=?,idDG=? WHERE idMentor=?",
    [
      id.fullName,
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
