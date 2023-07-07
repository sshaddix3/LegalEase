import React, { Component } from 'react'

class TextAnswer extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

    }
    
    onValueChange = (event) => {
        this.props.handleTextResponse(event.target.value);
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="textanswer" style={{display: "none"}}>{this.props.answerLabel}</label>
                    <input className="textanswer" type="text" value={this.props.value} onInput={this.onValueChange}></input>
                </div>
            </div>
        )
    }
}

export default TextAnswer
