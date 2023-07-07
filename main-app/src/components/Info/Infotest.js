import React, { Component } from 'react'

class Infotest extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        return (
                <div className="info-container">
                    <div className="info-wrapper">
                        {this.props.currentQuestion === "q1" && (
                        <div className="extra-information">q1 info</div>
                        )} 
                        {this.props.currentQuestion === "q1a" && (
                        <div className="extra-information">q1a info</div>
                        )} 
                        {this.props.currentQuestion === "q2" && (
                        <div className="extra-information">q2 info</div>
                        )} 
                        {this.props.currentQuestion === "q3" && (
                        <div className="extra-information">q3 info</div>
                        )} 
                        {this.props.currentQuestion === "q4" && (
                        <div className="extra-information">q4 info</div>
                        )} 
                    </div>
                </div>
        )
    }
}

export default Infotest
