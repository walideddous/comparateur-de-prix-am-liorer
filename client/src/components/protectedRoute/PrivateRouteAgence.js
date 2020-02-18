import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRouteAgence = ({
  component: Component,
  auth: { isAuthenticated, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && user && user.agence ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

PrivateRouteAgence.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRouteAgence);
