import React, { Component } from 'react'

class Question4 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            currentAnswerValue: props.initialvalue
        }
    }
    
    componentDidUpdate = () =>{
        const {currentAnswerValue} = this.state;
        this.props.onChange("q4", currentAnswerValue)
    }
    
    renderQuestion = (questionString) =>{
        return questionString;
    }
    
    onQ4Unfocused = (event) => {
        const {currentAnswerValue} = this.state;

        const updateAnswerQ4ToDbBody = {
            userID: this.props.user.id,
            userName: this.props.user.name,
            currAnswer: currentAnswerValue,
            question: `answer_q4`
        }

        fetch("http://localhost:3001/questionAnswer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(updateAnswerQ4ToDbBody) 
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

        this.props.onSubmit("q4",currentAnswerValue);
    }

    render() {

        return (
            <div>
                <div>
                    {this.renderQuestion("Question 4")}
                </div>
                <div>
                    <input className="q4-input" onInput={this.onHandleInput} value={this.state.currentAnswerValue} onBlur={this.onQ4Unfocused}></input>
                </div>
                <div>
                    <button type="submit" className="next-question-btn" onClick={this.onSubmit}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Question4