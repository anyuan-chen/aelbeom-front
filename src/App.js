import React from 'react';
import './App.css';
import Navbar from './shared/navbar'
import Home from './Home'
import Add from './add/add'
import View from './view/view'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/view" component={View}/>
            <Route path = "/add" component={Add}/>
          </Switch>
      </Router>
  );
}

export default App;
