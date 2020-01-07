import React from 'react';
import './App.css';
import UserSignUp from "./components/UserSignUp";
import Navigation from "./components/Navigation";
import JokesCardDisplay from "./components/JokesCardDisplay";
import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
   <Router>
    <div>
      <Navigation />
      <Route exact path="/jokes" component={JokesCardDisplay} />
      <Route exact path="/signup" component={UserSignUp} />
    </div>
    </Router>
  );
}
    
export default App;
