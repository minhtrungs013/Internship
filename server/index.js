const express = require("express");
const app = express();

const loginRoute = require("./routers/login");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.use("/", loginRoute);

app.listen(3000, () => {
  console.log("App start success");
});
