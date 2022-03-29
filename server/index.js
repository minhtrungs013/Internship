const express = require("express");
const app = express();
const db = require("./config/db");

const emailRoute = require("./routers/email");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use("/", emailRoute);

app.listen(5000, () => {
  console.log("App start success");
});
