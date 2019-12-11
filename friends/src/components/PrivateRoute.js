import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./Login.js";
import MyFriends from "./MyFriends.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
     render={props => 
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
/*
const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/friends" component={MyFriends} />
    </div>
  )
}
*/
export default PrivateRoute; 