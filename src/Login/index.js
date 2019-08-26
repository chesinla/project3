import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(){
        super();
         
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const login = this.props.logIn(this.state);

        login.then((data) => {

        })
    }
    render(){
        // const { username, password, onClick } = this.props;


        return(
            <div className="loginpage">
            <h1>Chart Nest</h1>
            <Link to="/register"><button>Create Account
            </button></Link>
            </div>
        );
    }
}

export default Login;