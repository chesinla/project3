import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Switch, Link, Route } from 'react-router-dom'
import Register from './CreateAccount';


class App extends Component {
  state={

  }
  render(){
    return(
      <Switch>
        <Route exact path="/login" render={()=> <Login />} />
        <Route exact path="/register" render={()=> <Register />} />
      </Switch>
    )
  }

}




export default App;
