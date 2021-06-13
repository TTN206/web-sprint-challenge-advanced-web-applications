import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
// importing components and other nessesary pieces
import {axiosWithAuth} from './helpers/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';

function App() {

  const logout = () =>{
    localStorage.removeItem('token');
    window.location.href='/';
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick={logout} >logout</a>
        </header> 

      <Switch>
        <PrivateRoute path='/bubbles' component={BubblePage} />

        <Route exact path="/" component={Login} />
      </Switch>  
      </div>
    </Router>
  );
}

export default App;

//Task List:
// [x] 1. Render BubblePage as a PrivateRoute
// [ ] 2. Build the logout button to remove the localStorage Item.