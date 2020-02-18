const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("API Running"));
//tester si APIEndpoint is running

require("./startup/routes")(app);
// define the routes
require("./startup/config")();
//Define the JsonsecretKey
require("./startup/db")();
//Connect with DataBase

const port = process.env.PORT || 5000;
//process.env.PORT when we deploye on Horukou we chose the PORT
app.listen(port, err => {
  if (err) console.log("Server failed to running");
  console.log(`Server is runing on port ${port}`);
});
