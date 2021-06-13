import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
// importing components and other nessesary pieces
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import {axiosWithAuth} from './helpers/axiosWithAuth';
function App() {

  const logout = () =>{
    axiosWithAuth()
      .post('/logout')
      .then((res)=>{
        console.log(res, 'we out!')
        localStorage.removeItem('token');
        window.location.href='/';
      })
      .catch((err) => err)
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
// [x] 2. Build the logout button to remove the localStorage Item.