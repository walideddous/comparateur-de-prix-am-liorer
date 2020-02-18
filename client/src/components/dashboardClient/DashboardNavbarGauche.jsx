import React, { useState } from "react";
import { Link } from "react-router-dom";
//Material UI
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import BusinessIcon from "@material-ui/icons/Business";
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
    active1: false,
    active2: false,
    active3: false,
    active4: false
  });

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          button
          selected={
            window.location.pathname === "/dashboard/profile" || active.active1
          }
          onClick={() => {
            setActive({
              active1: true,
              active2: false,
              active3: false,
              active4: false
            });
          }}
          id='1'
        >
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <Link to='/dashboard/profile' className={classes.linkstyle} id='1'>
            <ListItemText primary='Profile' />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={active.active2}
          onClick={() => {
            setActive({
              active1: false,
              active2: true,
              active3: false,
              active4: false
            });
          }}
        >
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <Link
            to='/dashboard/notification_client'
            className={classes.linkstyle}
          >
            <ListItemText primary='Notification' />
          </Link>
        </ListItem>
        <ListItem
          button
          selected={active.active3}
          onClick={() => {
            setActive({
              active1: false,
              active2: false,
              active3: true,
              active4: false
            });
          }}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <Link to='/dashboard/message_client' className={classes.linkstyle}>
            <ListItemText primary='Message' />
          </Link>
        </ListItem>
      </List>
      <List>
        <Divider />
        <ListItem
          button
          selected={active.active4}
          onClick={() => {
            setActive({
              active1: false,
              active2: false,
              active3: false,
              active4: true
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
