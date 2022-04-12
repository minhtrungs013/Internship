const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());



const loginRoute = require("./routers/login");
const emailRoute = require("./routers/email");
const internshipcourseRoute = require("./routers/internshipcourse");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use("/", loginRoute);
app.use("/", emailRoute);
app.use("/internshipcourse", internshipcourseRoute);

app.listen(5000, () => {
  console.log("App start success");
});
