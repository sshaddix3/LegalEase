import React, { Component } from 'react'

class Question3 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            currentAnswerValue: props.initialvalue
        }
    }
    
    componentDidUpdate = () =>{
        const {currentAnswerValue} = this.state;
        this.props.onChange("q3", currentAnswerValue)
    }
    
    renderQuestion = (questionString) =>{
        return questionString;
    }
    
    onQ3Unfocused = (event) => {
        const {currentAnswerValue} = this.state;

        const updateAnswerQ3ToDbBody = {
            userID: this.props.user.id,
            userName: this.props.user.name,
            currAnswer: currentAnswerValue,
            question: `answer_q3`
        }

        fetch("http://localhost:3001/questionAnswer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(updateAnswerQ3ToDbBody) 
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

        this.props.onSubmit("q3",currentAnswerValue);
    }

    render() {

        return (
            <div>
                <div>
                    {this.renderQuestion("Question 3")}
                </div>
                <div>
                    <input className="q3-input" onInput={this.onHandleInput} value={this.state.currentAnswerValue} onBlur={this.onQ3Unfocused}></input>
                </div>
                <div>
                    <button type="submit" className="next-question-btn" onClick={this.onSubmit}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Question3