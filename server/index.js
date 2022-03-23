const express = require("express");
const app = express();

const loginRoute = require("./routers/login");
const emailRoute = require("./routers/email");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use("/", loginRoute);
app.use("/", emailRoute);

const mentorRouter = require("./routers/mentorRouter");
app.use("/mentor", mentorRouter);

app.listen(3000, () => {
  console.log("App start success");
});
