import React, { Component } from 'react'

class Question1 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            currentAnswerValue: props.initialvalue,
        }
    }
    
    
    componentDidUpdate = () =>{
        const {currentAnswerValue} = this.state;
        this.props.onChange("q1", currentAnswerValue)
    }

    renderQuestion = (questionString) =>{
        return questionString;
    }

    onQ1Unfocused = (event) => {
        const {currentAnswerValue} = this.state;

        const updateAnswerQ1ToDbBody = {
            userID: this.props.user.id,
            userName: this.props.user.name,
            currAnswer: currentAnswerValue,
            question: "answer_q1"
        }

        fetch("http://localhost:3001/questionAnswer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(updateAnswerQ1ToDbBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
        })
    }

    onOption1 = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "YES"
        })
        

    }

    onOption2 = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: "NO"
        })

    }

    onSubmit = (event) =>{
        const {currentAnswerValue} = this.state;
        event.preventDefault();

        if(!currentAnswerValue){
            return;
        }
        
        this.props.onSubmit("q1",currentAnswerValue);
    }

    render() {
        const option1background = (this.state.currentAnswerValue === "YES") ? "rgb(90, 114, 192)" : "";
        const option2background = (this.state.currentAnswerValue === "NO") ? "rgb(90, 114, 192)" : "";
        return (
            <div>
                <div>
                    {this.renderQuestion("Question 1")}
                </div>
                <div>
                    <button className="q1-option1" style={{backgroundColor: option1background}} onClick={this.onOption1} onBlur={this.onQ1Unfocused}>YES</button>
                    <button className="q1-option2" style={{backgroundColor: option2background}} onClick={this.onOption2} onBlur={this.onQ1Unfocused}>NO</button>
                </div>
                <div>
                    <button type="submit" className="next-question-btn" onClick={this.onSubmit}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Question1
