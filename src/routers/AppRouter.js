import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { firebase } from "../firebase/firebase-config";

import { login } from "../actions/auth";
import Layout from "../components/layout";
import Customers from "../components/user";
import { PublicRoute } from "./PublicRoute";
import { startLoadingUser } from "../actions/user";
import DashboardContent from "../components/layout";
import { startLoadingNotes } from "../actions/notes";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      //observable si cambia el estado del ultimo logueo

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
        dispatch(startLoadingUser(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={DashboardContent}
          />
          <Layout>
            <PrivateRoute
              exact
              isAuthenticated={isLoggedIn}
              path="/notes"
              component={JournalScreen}
            />

            <PrivateRoute
              exact
              isAuthenticated={isLoggedIn}
              path="/user"
              component={Customers}
            />
          </Layout>

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
