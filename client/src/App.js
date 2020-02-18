import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
//import Home from "./components/layout/Home";
import Landing from "./components/layout/landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import LoginForm from "./components/auth/Login";
import PasswordOublier from "./components/auth/PasswordOublier";
import setAuthToken from "./utils/setAuthToken";
import DashboardAgence from "./components/dashboardAgence/DashboardAgence";
import DashboardAdmin from "./components/dashboardAdmin/DashboardAdmin";
import DashboardClient from "./components/dashboardClient/DashboardClient";
import NotFound from "./components/layout/notFound";
import PrivateRouteAgence from "./components/protectedRoute/PrivateRouteAgence";
import PrivateRouteAdmin from "./components/protectedRoute/PrivateRouteAdmin";
import PrivateRouteClient from "./components/protectedRoute/PrivateRouteClient";
import "./App.css";
//redux
import { Provider } from "react-redux";
import Store from "./store";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={Store}>
      <Router>
        <Fragment>
          <Navbar />
          <section>
            <Switch>
              <Route exact path='/home' component={Landing} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={LoginForm} />
              <Route
                exact
                path='/password-oublier'
                component={PasswordOublier}
              />
              <PrivateRouteAgence
                exact
                path='/dashboard/agence'
                component={DashboardAgence}
              />
              <PrivateRouteAgence
                exact
                path='/dashboard/flot_de_voiture'
                component={DashboardAgence}
              />
              <PrivateRouteAgence
                exact
                path='/dashboard/gestion_de_location'
                component={DashboardAgence}
              />
              <PrivateRouteAgence
                exact
                path='/dashboard/notification'
                component={DashboardAgence}
              />
              <PrivateRouteAgence
                exact
                path='/dashboard/message'
                component={DashboardAgence}
              />
              <PrivateRouteAdmin
                exact
                path='/dashboard/utilisateurs'
                component={DashboardAdmin}
              />
              <PrivateRouteClient
                exact
                path='/dashboard/profile'
                component={DashboardClient}
              />
              <PrivateRouteClient
                exact
                path='/dashboard/notification_client'
                component={DashboardClient}
              />
              <PrivateRouteClient
                exact
                path='/dashboard/message_client'
                component={DashboardClient}
              />
              <Route path='/not-found' component={NotFound} />
              <Redirect from='/' exact to='/home' />
              <Redirect to='/not-found' />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

//
