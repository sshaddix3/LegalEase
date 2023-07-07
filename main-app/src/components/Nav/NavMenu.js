import React, { Component } from 'react'

class NavMenu extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             questionToJump:"",
             currentAnswerValue: ""
        }
    }
    
    onQuestion1 = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "q1"
        }, () => {
            this.onSubmit();
        })
        

    }

    onQuestion1a = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "q1a"
        }, () => {
            this.onSubmit();
        })

    }

    onQuestion2 = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "q2"
        }, () => {
            this.onSubmit();
        })
        

    }

    onQuestion3 = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "q3"
        }, () => {
            this.onSubmit();
        })
        

    }

    onQuestion4 = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "q4"
        }, () => {
            this.onSubmit();
        })
        

    }

    onSubmit = () => {
        const currentAnswerValue = this.state.currentAnswerValue;

        if(currentAnswerValue === "q1"){
            this.props.onSubmit(currentAnswerValue);
        }

        if(currentAnswerValue === "q1a"){
            this.props.onSubmit(currentAnswerValue);
        }

        if(currentAnswerValue === "q2"){
            this.props.onSubmit(currentAnswerValue);
        }

        if(currentAnswerValue === "q3"){
            this.props.onSubmit(currentAnswerValue);
        }

        if(currentAnswerValue === "q4"){
            this.props.onSubmit(currentAnswerValue);
        }
    }


    render() {
        const jumpq1background = (this.props.valueq1.length > 0) ? "rgb(90, 114, 192)" : "#e29587";
        const jumpq1abackground = (this.props.valueq1a.length > 0) ? "rgb(90, 114, 192)" : "#e29587";
        const jumpq2background = (this.props.valueq2.length > 0) ? "rgb(90, 114, 192)" : "#e29587";
        const jumpq3background = (this.props.valueq3.length > 0) ? "rgb(90, 114, 192)" : "#e29587";
        const jumpq4background = (this.props.valueq4.length > 0) ? "rgb(90, 114, 192)" : "#e29587";

        return (
            <div>
                <div className="navigation-buttons-container">
                    <button type="submit" className="jump-question-btn" style={{backgroundColor: jumpq1background}} onClick={this.onQuestion1}>Question 1</button>

                    {this.props.valueq1 === "YES" && (
                        <button type="submit" className="jump-question-btn" style={{backgroundColor: jumpq1abackground}} onClick={this.onQuestion1a}>Question 1a</button>
                    )} 
                    
                    <button type="submit" className="jump-question-btn" style={{backgroundColor: jumpq2background}} onClick={this.onQuestion2}>Question 2</button>
                    
                    <button type="submit" className="jump-question-btn" style={{backgroundColor: jumpq3background}} onClick={this.onQuestion3}>Question 3</button>
                    
                    <button type="submit" className="jump-question-btn" style={{backgroundColor: jumpq4background}} onClick={this.onQuestion4}>Question 4</button>
                </div>
            </div>
        )
    }
}

export default NavMenu
