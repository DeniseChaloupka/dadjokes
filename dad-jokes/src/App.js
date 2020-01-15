import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import JokePage from "./components/JokePage";
import JokeProvider from "./contexts/JokeContext.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JokeProvider>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Register} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <Route path="/dashboard/:id" exact component={JokePage} />
        </JokeProvider>
      </header>
    </div>
  );
}

export default App;