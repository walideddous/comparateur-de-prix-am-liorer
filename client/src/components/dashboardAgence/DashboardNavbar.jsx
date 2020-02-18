import React from "react";
import { Link } from "react-router-dom";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";

//Redux
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: "#ff3366"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  linkstyle: {
    textDecoration: "none",
    color: " rgba(0, 0, 0, 0.87)",
    "&:hover": {
      textDecoration: "none",
      color: " rgba(0, 0, 0, 0.87)"
    }
  }
}));

function DashboardNavbar({ logout }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMenuOpen2 = Boolean(anchorE2);
  const isMenuOpen3 = Boolean(anchorE3);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMessageMenuOpen = event => {
    setAnchorE2(event.currentTarget);
  };
  const handleNotificationMenuOpen = event => {
    setAnchorE3(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
    setAnchorE3(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const menuId1 = "primary-search-account";
  const menuId2 = "primary-search-accou";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to='/dashboard/agence' className={classes.linkstyle}>
          Agence
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to='/dashboard/flot_de_voiture' className={classes.linkstyle}>
          Les voitures
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to='/dashboard/gestion_de_location' className={classes.linkstyle}>
          Gestion de location
        </Link>
      </MenuItem>
      <Divider />
      <MenuItem>
        <Link to='/home' onClick={logout} className={classes.linkstyle}>
          Se deconnecter
        </Link>
      </MenuItem>
    </Menu>
  );
  const renderMessageMenu = (
    <Menu
      anchorEl={anchorE2}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId1}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen2}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to='/dashboard/message' className={classes.linkstyle}>
          Messages
        </Link>
      </MenuItem>
    </Menu>
  );
  const renderNotificationMenu = (
    <Menu
      anchorEl={anchorE3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId2}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen3}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to='/dashboard/notification' className={classes.linkstyle}>
          Notification
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 2  new notifications' color='inherit'>
          <Badge badgeContent={2} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Link to='/dashboard/notification' className={classes.linkstyle}>
          Notifications
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <Link to='/dashboard/message' className={classes.linkstyle}>
          Messages
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static' style={{ backgroundColor: "#343a40" }}>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link
              to='/home'
              style={{ color: "#ff3366", textDecoration: "none" }}
            >
              Karen Wekri
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label='notification'
              color='inherit'
              edge='end'
              aria-controls={menuId1}
              aria-haspopup='true'
              onClick={handleNotificationMenuOpen}
            >
              <Badge color='secondary' badgeContent={2}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label='mails'
              color='inherit'
              edge='end'
              aria-controls={menuId1}
              aria-haspopup='true'
              onClick={handleMessageMenuOpen}
            >
              <Badge color='secondary' badgeContent={4}>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderMessageMenu}
      {renderNotificationMenu}
    </div>
  );
}

export default connect(null, { logout })(DashboardNavbar);
