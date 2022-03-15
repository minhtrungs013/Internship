const express = require("express");
const db = require("./config/db");
const app = express();
// const authRoute = require("./routes/auth");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
// app.use("/user", authRoute); 


app.listen(3000, () => {
  console.log("chạy rồi đó má");
});
