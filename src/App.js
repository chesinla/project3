import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Switch, Link, Route, NavLink } from 'react-router-dom'
import Register from './CreateAccount';
import Home from "./HomePage";
import Viewpage from "./ViewPage"


class App extends Component {
  state={

  }

  logIn = async (loginInfo) => {
    try {

      const loginResponse = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();


      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse

    } catch (err) {
      console.log(err)
    }
  }

  register = async (data) => {
    console.log(data)
    try {

     const registerResponse = await fetch('http://localhost:8000/user/register', {
       method: 'POST',
       credentials: 'include',// on every request we have to send the cookie
       body: data,
       headers: {
         'enctype': 'multipart/form-data'
       }
     })

     const parsedResponse = await registerResponse.json();

     console.log(parsedResponse)

     this.setState({
       ...parsedResponse.data,
       loading: false
     })
     return parsedResponse;

   } catch (err) {
     console.log(err)
   }
 }

  render(){
    return(
      <div>
        <NavLink exact to='/login'>Log In</NavLink>
        <NavLink exact to='/register'>Register</NavLink>
        <NavLink exact to='/home'>Home</NavLink>
        <NavLink exact to='/viewpage'>Landing</NavLink>
        <Switch>
          <Route exact path='/viewpage' render={() => <Viewpage/>} />
          <Route exact path="/login" render={()=> <Login  logIn={this.logIn}/>} />
          <Route exact path="/home" render={()=> <Home />} />
          <Route exact path="/register" render={()=> <Register register={this.register}/>} />
        </Switch>
      </div>
    )
  }

}


// Make a NavBar using NavLink from react router dom




export default App;
