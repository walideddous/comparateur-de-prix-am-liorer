import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Karen & Ekri</h1>
          <p className='lead'>
            Comparateur de prix de location des différentes agences disponibles
            dans toute la tunisie
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              S'inscrire
            </Link>
            <Link to='/login' className='btn btn-light'>
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
