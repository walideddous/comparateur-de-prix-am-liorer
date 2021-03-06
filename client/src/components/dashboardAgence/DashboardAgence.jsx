import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
//Material Ui
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//Component
import DashboardNavbar from "./DashboardNavbar";
import DashboardNavbarGauche from "./DashboardNavbarGauche";
import FlotVoiture from "./flot de voiture";
import DemandeLocation from "./notification/DemandeLocations";
import Compte from "./agence/Compte";
import GestionLocation from "./gestion de location";
import Question from "./message/Question";
import PrivateRouteAgence from "../protectedRoute/PrivateRouteAgence";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function DashboardAgence(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <DashboardNavbar />
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DashboardNavbarGauche />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            <DashboardNavbarGauche />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Switch>
          <PrivateRouteAgence
            exact
            path='/dashboard/agence'
            component={Compte}
          />
          <PrivateRouteAgence
            exact
            path='/dashboard/flot_de_voiture'
            component={FlotVoiture}
          />
          <PrivateRouteAgence
            exact
            path='/dashboard/gestion_de_location'
            component={GestionLocation}
          />
          <PrivateRouteAgence
            exact
            path='/dashboard/notification'
            component={DemandeLocation}
          />
          <PrivateRouteAgence
            exact
            path='/dashboard/message'
            component={Question}
          />
        </Switch>
      </main>
    </div>
  );
}

DashboardAgence.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default DashboardAgence;
