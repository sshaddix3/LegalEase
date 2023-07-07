import React, { Component } from 'react'

class Question extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    renderQuestion = (questionString) =>{
        return questionString;
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.renderQuestion(this.props.content)}
                </div>
            </div>
        )
    }
}

export default Question
