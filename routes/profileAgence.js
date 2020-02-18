const express = require("express");
const auth = require("../middleware/auth");
const { User } = require("../models/user");
const { Agence } = require("../models/profile");
const validateObjectId = require("../middleware/validateObjectId");

const router = express.Router();

// @route Get /api/profile_agence
// @desc get the current user
// @ express Privat
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .select("-isAdmin")
      .select("-status")
      .select("-agence");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (ex) {
    res.status(500).send("Server Error");
  }
});

// @route Get /api/profile_agence
// @desc get the currents cars
// @ express Privat
router.get("/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      const agence = await Agence.find({ user: id });
      if (!agence) return res.status(404).json({ msg: "User not found" });
      res.json(agence);
    }
  } catch (ex) {
    res.status(500).send("Server Error");
  }
});

// @route Post api/profile_agence
// @desc post ajouter/modifier une nuvelle voiture
// @ express Privat
router.post("/", auth, async (req, res) => {
  const { image, marque, model, annee, clim, boite, prix, dispo } = req.body;

  const profileField = {};
  profileField.user = req.user.id;
  if (image) profileField.image = image;
  if (marque) profileField.marque = marque;
  if (model) profileField.model = model;
  if (annee) profileField.annee = annee;
  if (clim) profileField.clim = clim;
  if (boite) profileField.boite = boite;
  if (prix) profileField.prix = prix;
  if (dispo) profileField.dispo = dispo;

  try {
    let agence = await Agence.findOne({ user: req.user.id });
    //create
    agence = new Agence(profileField);
    await agence.save();
    res.json(agence);
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send("Server Error");
  }
});

// @route Put api/profile_agence
// @desc put modifier une nuvelle voiture
// @ express Privat
router.put("/:id", auth, validateObjectId, async (req, res) => {
  const { image, marque, model, annee, clim, boite, prix, dispo } = req.body;

  const profileField = {};
  profileField.user = req.user.id;
  if (image) profileField.image = image;
  if (marque) profileField.marque = marque;
  if (model) profileField.model = model;
  if (annee) profileField.annee = annee;
  if (clim) profileField.clim = clim;
  if (boite) profileField.boite = boite;
  if (prix) profileField.prix = prix;
  if (dispo) profileField.dispo = dispo;

  try {
    let agence = await Agence.findOne({ user: req.user.id });
    if (agence) {
      // Update
      agence = await Agence.findOneAndUpdate(
        { _id: req.params.id },
        { $set: profileField },
        { new: true }
      );

      return res.json(agence);
    }
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send("Server Error");
  }
});
// @route Put api/profile_agence
// @desc delete une voiture
// @ express Privat
router.delete("/:id", auth, validateObjectId, async (req, res) => {
  try {
    let agence = await Agence.findOne({ user: req.user.id });
    if (agence) {
      // Update
      agence = await Agence.findByIdAndDelete(req.params.id);

      return res.json(agence);
    }
  } catch (ex) {
    console.error(ex.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
