import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             emailField: "",
             passwordField: "",
             nameField: "",
             isRegistered: false,
             errorMessage: ""
        }
    }
    
    handleEmailRegistration = (event) => {
        this.setState({
            emailField: event.target.value
        })
    }

    handleNameRegistration = (event) => {
        this.setState({
            nameField: event.target.value
        })
    }

    handlePasswordRegistration = (event) => {
        this.setState({
            passwordField: event.target.value
        })
    }
    
    handleRegistration = (event) => {
        event.preventDefault();
        console.log(`${this.state.emailField} ${this.state.passwordField} ${this.state.nameField}`);

        this.setState({
            errorMessage: ""
        })

        const {emailField, passwordField, nameField} = this.state;
        
        const registrationRequestBody = {
            emailField: emailField,
            passwordField: passwordField,
            nameField: nameField
        };

        console.log(registrationRequestBody);

        fetch("http://localhost:3001/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(registrationRequestBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
            if(parsedResponse.errorInEmail.length > 0){
                this.setState({
                    errorMessage: parsedResponse.errorInEmail
                })
            }
            else{
                this.setState({
                    isRegistered: true
                })
            }
        })
    }

    render() {
        return (
            <div>
                <h1 id="registration-title-text">Register A New Account</h1>
                <div className="registration-page-container">
                    <div>
                        {this.state.errorMessage}
                    </div>
                    <form onSubmit={this.handleRegistration}>
                            {/* Name Registration */}
                            <div>
                                <label htmlFor="registernameinput" className = "form-labels">Name</label>
                                <input id="register-name-input" className="registration-input-fields" type="text" value={this.state.nameField} onChange = {this.handleNameRegistration}></input>
                            </div>
                        
                            {/* Email Registration */}
                            <div>
                                <label htmlFor="registeremailinput" className = "form-labels">Email Address</label>
                                <input id="register-email-input" className="registration-input-fields" type="text" value={this.state.emailField} onChange = {this.handleEmailRegistration}></input>
                            </div>

                            {/* Password Registration */}
                            <div>
                                <label htmlFor ="registerpassword" className = "form-labels">Password</label>
                                <input id="register-password-input" className="registration-input-fields" type="password" value={this.state.passwordField} onChange={this.handlePasswordRegistration}></input>
                            </div>
                            
                            {/* Submit Button */}
                            <div>
                                <button type="submit" id="registration-submit-btn">Submit</button>
                            </div>
                    </form>
                    <Link to='/login' className="registrationpage-link-tologin">
                        <div>Already have an Account?</div>
                    </Link>
                </div>
        
                {this.state.isRegistered && (
                    <Redirect to="/home"></Redirect>
                )}  
            </div>
        )
    }
}

export default Register
