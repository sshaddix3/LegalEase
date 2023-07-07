import React, { Component } from 'react'

class NextButton extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.handleNextButton}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default NextButton
