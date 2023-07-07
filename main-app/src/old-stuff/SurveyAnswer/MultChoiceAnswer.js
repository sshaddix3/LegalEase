import React, { Component } from 'react'

class MultChoiceAnswer extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             backgroundcolor: ""
        }
    }
    
    onClick = (event) => {
        event.preventDefault();
        this.props.handleMultChoiceResponse(event.target.value);
        
        this.setState({
            backgroundcolor: "green"
        })

    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="multchoiceanswer">{this.props.answerLabel}</label>
                    <button className="mc-button" className={this.props.className} id="multchoiceanswer" style={{backgroundColor: this.state.backgroundcolor}} value={this.props.value} onClick={this.onClick}>{this.props.text}</button>
                </div>
            </div>
        )
    }
}

export default MultChoiceAnswer
