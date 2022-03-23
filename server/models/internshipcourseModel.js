const connect = require("../config/db");

const Internshipcourse = (internshipcourse) => {
  this.idInternshipCource = internshipcourse.idInternshipCource;
  this.nameCourse = internshipcourse.nameCourse;
  this.dateStart = internshipcourse.dateStart;
  this.dateEnd = internshipcourse.dateEnd;
  this.status = internshipcourse.status;
  this.kindOfInternship = internshipcourse.kindOfInternship;
};
Internshipcourse.get_all = (result) => {
  connect.query("SELECT * FROM internshipcourse", (err, internshipcourse) => {
    console.log(internshipcourse);
    if (err) {
      result(null);
    } else {
      result(internshipcourse);
    }
  });
};
Internshipcourse.getByID = (id, result) => {
  connect.query(
    "SELECT * FROM internshipcourse WHERE idInternshipCourse = ?",
    id,
    (err, internshipcourse) => {
      if (err) {
        result(null);
      } else {
        result(internshipcourse);
      }
    }
  );
}
Internshipcourse.remove = (id, result) => {
  connect.query(
    "DELETE FROM internshipcourse WHERE idInternshipCource  = ?",
    id,
    (err, internshipcourse) => {
      if (err) {
        result("Error");
      } else {
        result("Successfully deleted " + id );
      }
    }
  );
};
Internshipcourse.update = (id,result)=>{
  console.log(id)

  connect.query(" UPDATE internshipcourse SET nameCourse =?,dateStart =?,dateEnd=?,status=?,kindOfInternship=? WHERE idInternshipCource=?",[id.nameCourse,id.dateStart,id.dateEnd,id.status,id.kindOfInternship,id.idInternshipCource], (err,internshipcourse)=>{
      console.log(err)
      if(err){
          result("Error");
      }else {
          result("Successfully updated "+ id)

      }
  } )
}
module.exports = Internshipcourse;
