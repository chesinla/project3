import React, { Component } from 'react';

class Register extends component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''    
        }
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
}