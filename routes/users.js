const express = require("express");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { User, validateRegisterUser } = require("../models/user");

const router = express.Router();

// @route Post api/users
// @desc Register Users (admin , client , responsable d'agence)
// @ express Public

router.post("/", async (req, res) => {
  const { error } = validateRegisterUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //test if the entry are valid
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered");
    //test if the email already registered

    user = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    //create a neww collection colled user and put inside name, email,password
    //get the password and hash it
    //save all the collection in db

    const token = user.generateAuthToken();
    // generate a token

    res
      .header("x-auth-token", token)
      .send(_.pick(user, ["nom", "prenom", "email"]));
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
