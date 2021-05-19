import React, { Children } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

export const PrivateAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('user') ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{ pathname: "/sign-in", state: { from: props.location } }} />
        )
      }
    />
  );
};
