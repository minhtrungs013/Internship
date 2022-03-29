const express = require("express");
const app = express();

const mentorRoute = require("./routers/mentorRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use("/mentor", mentorRoute);

app.listen(5000, () => {
  console.log("App start success");
});
