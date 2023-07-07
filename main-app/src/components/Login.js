import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// 1: Add element HTML
// 2: Assign Component State to element value
// 3: Assign onchange handler that updates the state

const TITLE = 'Freebird - Login'

class Login extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
             error: "",
             isLoggedIn: false 
        }
    }
        
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`${this.state.email} ${this.state.password}`);
        
        this.setState({
            error: ""
        })

        const {email, password} = this.state;

        const requestBody = {
            email: email,
            password: password,
        };

        console.log(requestBody);

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(requestBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
            
            if(parsedResponse.error){
                this.setState({
                    error: parsedResponse.error
                });
            }
            else{
                this.setState({
                    isLoggedIn: true
                });
            }
        })
    }
  
    render() {
        return (
            <div>
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <h1>Login</h1>
                {this.state.error.length > 0 && (
                    <div className="errordiv">
                        {this.state.error}
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    
                    {/* Email Input */}
                    <div>
                        <label htmlFor="emailinput" className = "form-labels">Email Address</label>
                        <input id="emailinput" type="text" value={this.state.email} onChange = {this.handleEmailChange}></input>
                    </div>
                    
                    {/* Password Input */}
                    <div>
                        <label htmlFor ="textarea" className = "form-labels">Password</label>
                        <input id="textarea" type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
                {this.state.isLoggedIn && (
                    <Redirect to="/home"></Redirect>
                )}   
                
                <Link to='/register' className="login-page-links">
                            Register
                </Link>
                <Link to='/passwordreset' className="login-page-links">
                            Forgot Password?
                </Link>
                
            </div>
        )
    }
}

export default Login
