const express = require("express");
const app = express();

const middlewareController = require("./controllers/middlewareController");


const loginRoute = require("./routers/login");
const emailRoute = require("./routers/email");
const internshipcourseRoute = require("./routers/internshipcourse");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use("/", loginRoute);
app.use("/",middlewareController.verifyToken, emailRoute);
app.use("/internshipcourse",middlewareController.verifyToken, internshipcourseRoute);

app.listen(3000, () => {
  console.log("App start success");
});
