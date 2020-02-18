const express = require("express");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const { User, validateLoginUser } = require("../models/user");

const router = express.Router();

// @route Post api/auth
// @desc Authenticate Users & get token
// @ express Public

router.post("/", async (req, res) => {
  const { error } = validateLoginUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // validate the user to log In
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email or Password is not valid");
    // test if the email is valid

    const passValid = await bcrypt.compare(req.body.password, user.password);
    if (!passValid) return res.status(400).send("Email or Password not valid");
    // Check if the password is valid

    const token = user.generateAuthToken();
    res.send(token);
    //return the token
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send("Server error");
  }
});

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  try {
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
