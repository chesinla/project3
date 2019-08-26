import React, { Component } from 'react';
import { async } from 'q';

class Register extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''    
        }
    }
    handleChange = (e) => {
        if(e.target.name !== 'image'){
            this.setState({[e.target.name]: e.target.value});
        } else {
            console.log(e.target.files[0])
            this.setState({image: e.target.files[0]});
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);

        console.log(data.entries(), ' this is data')
        for (let pair of data.entries()){
            console.log(pair[0] ,', ', pair[1])
        }

        const registerCall = this.props.register(data);

        registerCall.then((data) => {
            console.log(data)
            if(data.status.message === "Success"){
                this.props.history.push('/profile')
            } else {
                console.log(data, ' this should have an error message')
            }
        })

    }
    render(){
        return(
            <div className="registerpage">
            <h1>I'm so Chartsy</h1>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
};

export default Register;