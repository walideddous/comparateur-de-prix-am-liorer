import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Redux
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = ({ user, isAuthenticated, logout }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>S'inscrire</Link>
      </li>
      <li>
        <Link to='/login'>Se connecter</Link>
      </li>
    </ul>
  );
  const clientLinks = (
    <ul>
      <li>{user && <Link to='/dashboard/profile'>{user.prenom}</Link>}</li>
      <li>
        <Link to='/home' onClick={logout}>
          Se deconnecter
        </Link>
      </li>
    </ul>
  );
  const adminLink = (
    <ul>
      <li>{user && <Link to='/dashboard/utilisateurs'>{user.prenom}</Link>}</li>
      <li>
        <Link to='/home' onClick={logout}>
          Se deconnecter
        </Link>
      </li>
    </ul>
  );
  const agenceLinks = (
    <ul>
      <li>{user && <Link to='/dashboard/agence'>{user.nomAgence}</Link>}</li>
      <li>
        <Link to='/home' onClick={logout}>
          Se deconnecter
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h4 style={{ marginBottom: "0" }}>
        <Link to='/home'>
          <i className='fas fa-car'></i> Karen Wekri
        </Link>
      </h4>
      {!isAuthenticated && <Fragment>{guestLinks}</Fragment>}
      {isAuthenticated && user && user.client && (
        <Fragment>{clientLinks}</Fragment>
      )}
      {isAuthenticated && user && user.isAdmin && (
        <Fragment>{adminLink}</Fragment>
      )}
      {isAuthenticated && user && user.agence && (
        <Fragment>{agenceLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

const mapStatToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStatToProps, { logout })(Navbar);
