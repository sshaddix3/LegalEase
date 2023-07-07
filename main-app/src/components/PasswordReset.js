import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class PasswordReset extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             pwResetEmailField: ""
        }
    }
    
    handleEmailFieldPwReset = (event) => {
        this.setState({
            pwResetEmailField: event.target.value
        })
    }
    
    handlePwResetSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.pwResetEmailField);

        const {pwResetEmailField} = this.state;
        
        const pwResetRequestBody = {
            pwResetEmailField: pwResetEmailField
        };

        console.log(pwResetRequestBody);

        fetch("http://127.0.0.1:3001/passwordReset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pwResetRequestBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
        })
    }

    render() {
        return (
            <div>
                <h1>Forgot Your Password?</h1>
                {/* <div>
                    {this.state.errorMessage}
                </div> */}
                <form onSubmit={this.handlePwResetSubmit}>
                    {/* Email Input */}
                    <div>
                        <label htmlFor="pwResetEmailInput" className = "form-labels">Email Address</label>
                        <input id="pwResetEmailInput" type="text" value={this.state.pwResetEmailField} onChange = {this.handleEmailFieldPwReset}></input>
                    </div>
            
                    {/* Submit Button */}
                    <div className="submit-button-pwreset">
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <Link to='/home'>
                    <div>Home</div>
                </Link>
            </div>
        )
    }
}

export default PasswordReset
