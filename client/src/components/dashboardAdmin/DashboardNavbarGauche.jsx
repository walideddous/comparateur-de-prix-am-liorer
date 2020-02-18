import React, { useState } from "react";
import { Link } from "react-router-dom";
//Material UI
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  linkstyle: {
    textDecoration: "none",
    color: " rgba(0, 0, 0, 0.87)",
    "&:hover": {
      textDecoration: "none",
      color: " rgba(0, 0, 0, 0.87)"
    }
  }
}));

function DashboardNavbarGauche({ logout }) {
  const classes = useStyles();
  const [active, setActive] = useState({
    active1: false
  });

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          selected={
            window.location.pathname === "/dashboard/utilisateurs" ||
            active.active1
          }
          onClick={() => {
            setActive({
              active1: true
            });
          }}
          id='1'
        >
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <Link
            to='/dashboard/utilisateurs'
            className={classes.linkstyle}
            id='1'
          >
            <ListItemText primary='Les utilisateurs' />
          </Link>
        </ListItem>
      </List>
      <List>
        <Divider />
        <ListItem
          button
          selected={active.active7}
          onClick={() => {
            setActive({
              active1: false,
              active2: false,
              active3: false,
              active4: false,
              active5: false,
              active6: false,
              active7: true
            });
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <Link to='/home' onClick={logout} className={classes.linkstyle}>
            <ListItemText primary='Se deconnecter' />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default connect(null, { logout })(DashboardNavbarGauche);
