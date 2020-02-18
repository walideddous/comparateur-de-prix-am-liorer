const express = require("express");
const auth = require("../middleware/auth");
const isadmin = require("../middleware/isadmin");
const validateObjectId = require("../middleware/validateObjectId");
const { User } = require("../models/user");

const router = express.Router();

// @route Get api/users
// @desc Get all the users
// @ express Private
router.get("/", auth, isadmin, async (req, res) => {
  const users = await User.find().select("-password");

  try {
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// @route Delete api/users
// @desc delete  byid
// @ express Private
router.delete("/:id", auth, isadmin, validateObjectId, async (req, res) => {
  const deleted = await User.findByIdAndDelete({ _id: req.params.id });
  try {
    res.json(deleted);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
