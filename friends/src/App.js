import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login.js"
import PrivateRoute from "./components/PrivateRoute.js"
import MyFriends from "./components/MyFriends.js"

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/friends" component={MyFriends} />
      </div>
    </Router>
  );
}

export default App;