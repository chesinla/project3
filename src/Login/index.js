import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom'
import "./style.css"

class Login extends Component {
    constructor(){
        super();
         
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state)

        const login = this.props.logIn(this.state)
        login.then(res => res.data && this.props.history.push('/'))

    }
    render(){
        // const { username, password, onClick } = this.props;

        return(
            <div className="loginpage">
                <h1>Chart Nest</h1>
                <Link to="/register">
                    <button>
                        Create Account
                    </button>
                </Link>

                <h2>Existing Member Login</h2>
                    <form onSubmit={this.handleSubmit}> 
                        <input name="username" input="text" onChange={this.handleChange} placeholder="username" />
                        <input name="password" input="text" onChange={this.handleChange} placeholder="password" />
                        <button type="submit">Login </button>
                    </form> 
            </div>
           
        );           
    }
}

// onChange on the input tags 
// use the handleChange 

export default withRouter(Login);