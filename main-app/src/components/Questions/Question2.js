import React, { Component } from 'react'

class Question2 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            currentAnswerValue: props.initialvalue
        }
    }
    
    componentDidUpdate = () =>{
        const {currentAnswerValue} = this.state;
        this.props.onChange("q2", currentAnswerValue)
    }

    renderQuestion = (questionString) =>{
        return questionString;
    }
    
    onQ2Unfocused = (event) => {
        const {currentAnswerValue} = this.state;

        const updateAnswerQ2ToDbBody = {
            userID: this.props.user.id,
            userName: this.props.user.name,
            currAnswer: currentAnswerValue,
            question: `answer_q2`
        }

        fetch("http://localhost:3001/questionAnswer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(updateAnswerQ2ToDbBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
        })

    }

    onHandleInput = (event) => {
        const {currentAnswerValue} = this.state;
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

        this.props.onSubmit("q2",currentAnswerValue);
    }

    render() {

        return (
            <div>
                <div>
                    {this.renderQuestion("Question 2")}
                </div>
                <div>
                    <input className="q2-input" onInput={this.onHandleInput} value={this.state.currentAnswerValue} onBlur={this.onQ2Unfocused}></input>
                </div>
                <div>
                    <button type="submit" className="next-question-btn" onClick={this.onSubmit}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Question2