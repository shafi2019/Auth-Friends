import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  return (
    <Router>
      <div className="App">
      <PrivateRoute />
      </div>
    </Router>
  );
}

export default App;