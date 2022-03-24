const express = require("express");
const app = express();


const loginRoute = require("./routers/login");
const emailRoute = require("./routers/email");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//internshipcourse
var internshipcourseRouter = require("./routers/internshipcourseRouter.js");
app.use("/internshipcourse", internshipcourseRouter);

//ROUTES
app.use("/", loginRoute);
app.use("/", emailRoute);

app.listen(3000, () => {
  console.log("App start success");
});
