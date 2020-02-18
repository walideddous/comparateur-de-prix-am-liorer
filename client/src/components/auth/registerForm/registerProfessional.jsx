import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { PropTypes } from "prop-types";

//Redux
import { connect } from "react-redux";
import { setAlert } from "./../../../actions/alert";
import { register } from "./../../../actions/auth";

const RegisterProfessional = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    password2: "",
    nomAgence: "",
    numLegalAgence: "",
    telephone: ""
  });

  const {
    nom,
    prenom,
    email,
    password,
    password2,
    nomAgence,
    numLegalAgence,
    telephone
  } = formData;

  const schema = {
    nom: Joi.string()
      .required()
      .min(5)
      .label("Nom"),
    prenom: Joi.string()
      .required()
      .min(5)
      .label("Prenom"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .max(1024)
      .label("Mot de passe"),
    password2: Joi.string()
      .required()
      .min(5)
      .max(1024)
      .label("Comfirmer le mote de passe"),
    agence: Joi.boolean(),
    status: Joi.string(),
    nomAgence: Joi.string()
      .required()
      .min(5)
      .label("Nom de l'agence"),
    numLegalAgence: Joi.string()
      .required()
      .min(5)
      .label("Numero legal de l'agence"),
    telephone: Joi.string()
      .required()
      .min(8)
      .max(13)
      .label("Numero de telephone")
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
    setFormData({ ...formData, [name]: value, agence: true, status: "Agence" });
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
      <h1 className='large text-primary'>
        S'inscrire en tant que Responsable d'agence
      </h1>
      <p className='lead'>
        <i className='fas fa-building'></i> Creer votre compte professionnel
      </p>
      <form className='form' onSubmit={e => handleSubmit(e)} noValidate>
        <div className='form-group'>
          <input
            type='text'
            placeholder="Nom de l'agence"
            name='nomAgence'
            value={nomAgence}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder="Numero legal de l'agence"
            name='numLegalAgence'
            value={numLegalAgence}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder="Numero du telephone de l'agence"
            name='telephone'
            value={telephone}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nom du responsable'
            name='nom'
            value={nom}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Prenom du responsable'
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
            placeholder='Mote de passe'
            name='password'
            value={password}
            onChange={e => handleChange(e)}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirmer votre mot de passe'
            name='password2'
            value={password2}
            onChange={e => handleChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value="S'inscrire" />
      </form>
      <p className='my-1'>
        Avez vous déja un compte ? <Link to='/login'>Connexion</Link>
      </p>
    </Fragment>
  );
};

RegisterProfessional.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapsStatToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapsStatToProps, { setAlert, register })(
  RegisterProfessional
);
