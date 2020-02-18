const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  client: {
    type: Boolean
  },
  agence: {
    type: Boolean
  },
  isAdmin: {
    type: Boolean
  },
  nom: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  prenom: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  nomAgence: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  numLegalAgence: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  telephone: {
    type: Number,
    minlength: 8,
    maxlength: 13
  },
  status: {
    type: String
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { id: this.id, isAdmin: this.isAdmin },
    config.get("jsonSecretKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateRegisterUser(user) {
  const schema = {
    nom: Joi.string()
      .min(5)
      .max(50)
      .required(),
    prenom: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    nomAgence: Joi.string()
      .min(5)
      .max(50),
    numLegalAgence: Joi.string()
      .min(5)
      .max(50),
    telephone: Joi.string()
      .min(5)
      .max(255),
    status: Joi.string(),
    client: Joi.boolean(),
    agence: Joi.boolean(),
    isAdmin: Joi.boolean()
  };
  return Joi.validate(user, schema);
}

function validateLoginUser(user) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(user, schema);
}

module.exports = {
  User,
  validateRegisterUser,
  validateLoginUser
};
