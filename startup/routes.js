const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const profileAgence = require("../routes/profileAgence");
const profileAdmin = require("../routes/profileAdmin");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/profile_admin", profileAdmin);
  app.use("/api/profile_agence", profileAgence);
};
