import React, { Fragment } from "react";
import PropTypes from "prop-types";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
//Redux
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  },
  toolbar: theme.mixins.toolbar
}));

const DisplayAlert = ({ alerts }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        {alerts.map(alert => (
          <Alert severity='error'>{alert.msg}</Alert>
        ))}
      </div>
    </Fragment>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(DisplayAlert);
