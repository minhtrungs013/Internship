const connect = require("../config/db");

const Internshipcourse = (internshipcourse) => {
  this.idInternshipCourse = internshipcourse.idInternshipCourse;
  this.nameCoure = internshipcourse.nameCoure;
  this.dateStart = internshipcourse.dateStart;
  this.dateEnd = internshipcourse.dateEnd;
  this.status = internshipcourse.status;
  this.kindOfInternship = internshipcourse.kindOfInternship;
};

Internshipcourse.getNameInternshipcourse = (result) => {
  connect.query(
    "SELECT * FROM internshipcourse",
    (err, internshipcourse) => {
      if (err) {
        result(null);
      } else {
        result(internshipcourse);
      }
    }
  );
};

Internshipcourse.getIdInternshipcourse = (id, result) => {
  connect.query(
    "SELECT nameCoure FROM internshipcourse WHERE idInternshipCourse = ?",
    id,
    (err, internshipcourse) => {
      if (err) {
        result(null);
      } else {
        result(internshipcourse);
      }
    }
  );
};

Internshipcourse.createInternshipcourse = (data, result) => {
  connect.query(
    "INSERT INTO internshipcourse SET ?",
    data,
    (err, internshipcourse) => {
      if (err) {
        result(null);
      } else {
        result({ idInternshipCourse: internshipcourse.insertId, ...data });
      }
    }
  );
};

Internshipcourse.DeleteInternshipcourse = (id, result) => {
  connect.query(
    "DELETE FROM internshipcourse WHERE idInternshipCourse = ?",
    id,
    (err, internshipcourse) => {
      if (err) {
        result(null);
      } else {
        result(internshipcourse);
      }
    }
  );
};

module.exports = Internshipcourse;
