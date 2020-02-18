import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { PropTypes } from "prop-types";
//Redux
import { register } from "../../../actions/auth";
import { connect } from "react-redux";
import { setAlert } from "./../../../actions/alert";

const RegisterClient = ({ register, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password2: ""
  });

  const { nom, prenom, email, password, password2 } = formData;

  const schema = {
    nom: Joi.string()
      .min(5)
      .max(50)
      .required()
      .label("Nom"),
    prenom: Joi.string()
      .min(5)
      .max(50)
      .required()
      .label("Prenom"),
    email: Joi.string()
      .min(5)
      .max(255)
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
      .label("Password"),
    password2: Joi.string()
      .min(5)
      .max(255)
      .required()
      .label("Password2"),
    client: Joi.boolean(),
    status: Joi.string()
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(formData, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, client: true, status: "Client" });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validate();
    for (const property in errors) {
      setAlert(errors[property]);
    }
    if (password !== password2) {
      setAlert("Passwords do not match");
    } else {
      delete formData.password2;
      register(formData);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <h1 className='large text-primary'>S'inscrire en tant que Client</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Creer votre compte
      </p>
      <form className='form' onSubmit={e => handleSubmit(e)} noValidate>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nom'
            name='nom'
            value={nom}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Prenom'
            name='prenom'
            value={prenom}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Adresse Email'
            name='email'
            value={email}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => handleChange(e)}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => handleChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value="S'inscrire" />
      </form>
      <p className='my-1'>
        Avez vous déja un compte? <Link to='/login'>Connexion</Link>
      </p>
    </Fragment>
  );
};

RegisterClient.protoTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, setAlert })(RegisterClient);
