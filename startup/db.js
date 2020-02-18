const mongoose = require("mongoose");
const config = require("config");
mongoose.set("useCreateIndex", true);

module.exports = function() {
  const db = config.get("db");
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => console.log(`Connected on ${db}..`))
    .catch(() => console.log("Cannot connect to the DB"));
};
