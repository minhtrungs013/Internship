const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
const mentorRouter = require("./routers/mentorRouter");
app.use("/mentor", mentorRouter);

app.listen(5000, () => {
  console.log("App start success");
});
