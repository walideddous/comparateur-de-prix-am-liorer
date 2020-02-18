const mongoose = require("mongoose");
const Joi = require("joi");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  image: {
    type: String
  },
  marque: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  annee: {
    type: Number,
    min: 2000,
    max: 2100,
    required: true
  },
  clim: {
    type: String,
    required: true
  },
  boite: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  dispo: {
    type: Number,
    required: true
  }
});

const Agence = mongoose.model("agence", profileSchema);

module.exports = {
  Agence
};
