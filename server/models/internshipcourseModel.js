const connect = require("../config/db");

const InternshipCourse = (internshipCourse) => {
  this.idInternshipCourse = internshipCourse.idInternshipCourse;
  this.nameCourse = internshipCourse.nameCourse;
  this.dateStart = internshipCourse.dateStart;
  this.dateEnd = internshipCourse.dateEnd;
  this.status = internshipCourse.status;
  this.kindOfInternship = internshipCourse.kindOfInternship;
};

InternshipCourse.get_all = (result) => {
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
InternshipCourse.getByID = (id, result) => {
  connect.query(
    "SELECT * FROM internshipcourse WHERE idInternshipCource = ?",
    id,
    (err, internshipCourse) => {
      if (err) {
        result(null);
      } else {
        result(internshipCourse);
      }
    }
  );
};
InternshipCourse.create = (data, result) => {
  connect.query(
    "INSERT INTO internshipcourse SET ?",
    data,
    (err, internshipCourse) => {
      if (err) {
        result(null);
      } else {
        result({ idInternshipCourse: internshipCourse.insertId, ...data });
      }
    }
  );
};

module.exports = InternshipCourse;
