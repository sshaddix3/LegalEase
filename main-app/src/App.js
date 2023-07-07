import './App.css';
import './components/myStylesheet.css';
import Login from './components/Login';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/passwordreset" component={PasswordReset}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App

