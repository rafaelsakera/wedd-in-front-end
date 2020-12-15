import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

function isAuthenticated() {
  let token = Cookies.get("remember_token");
  let session = Cookies.get("session");
  if (token !== undefined || session !== undefined) {
    return true;
  } else {
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
