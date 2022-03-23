const connect = require("../config/db");

const Internshipcourse = (internshipcourse) => {
  this.idInternshipCourse = internshipcourse.idInternshipCourse;
  this.nameCourse = internshipcourse.nameCourse;
  this.dateStart = internshipcourse.dateStart;
  this.dateEnd = internshipcourse.dateEnd;
  this.status = internshipcourse.status;
  this.kindOfInternship = internshipcourse.kindOfInternship;
};

Internshipcourse.get_all = (result) => {
  connect.query(
    "SELECT internshipcourse.nameCourse FROM internshipcourse",
    (err, internshipcourse) => {
      if (err) {
        result(null);
      } else {
        result(internshipcourse);
      }
    }
  );
};
Internshipcourse.getByID = (id, result) => {
  connect.query(
    "SELECT * FROM internshipcourse WHERE idInternshipCource = ?",
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
Internshipcourse.create = (data, result) => {
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

module.exports = Internshipcourse;
