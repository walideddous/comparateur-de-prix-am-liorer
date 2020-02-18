import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRouteClient = ({
  component: Component,
  auth: { isAuthenticated, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && user && user.client ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

PrivateRouteClient.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRouteClient);
