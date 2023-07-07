import React, { Component } from 'react'

class Question1a extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            currentAnswerValue: props.initialvalue
        }
    }
    
    componentDidUpdate = () =>{
        const {currentAnswerValue} = this.state;
        this.props.onChange("q1a", currentAnswerValue)
    }

    renderQuestion = (questionString) =>{
        return questionString;
    }
    
    onQ1aUnfocused = (event) => {
        const {currentAnswerValue} = this.state;

        const updateAnswerQ1aToDbBody = {
            userID: this.props.user.id,
            userName: this.props.user.name,
            currAnswer: currentAnswerValue,
            question: `answer_q1a`
        }

        fetch("http://localhost:3001/questionAnswer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(updateAnswerQ1aToDbBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
        })

    }

    onHandleInput = (event) => {
        event.preventDefault();
        
        this.setState({
            currentAnswerValue: event.target.value
        })
    }

    onSubmit = (event) =>{
        const {currentAnswerValue} = this.state;
        event.preventDefault();

        if(!currentAnswerValue){
            return;
        }
        
        this.props.onSubmit("q1a", currentAnswerValue);
    }

    render() {

        return (
            <div>
                <div>
                    {this.renderQuestion("Question 1a")}
                </div>
                <div>
                    <input className="q1a-input" onInput={this.onHandleInput} value={this.state.currentAnswerValue} onBlur={this.onQ1aUnfocused}></input>
                </div>
                <div>
                    <button type="submit" className="next-question-btn" onClick={this.onSubmit}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Question1a