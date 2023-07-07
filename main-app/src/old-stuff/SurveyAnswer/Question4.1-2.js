import React, { Component } from 'react'

class Question412 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            marriageDate: props.value.marriageDate,
            marriagePlaceCity: props.value.marriagePlaceCity,
            marriagePlaceCounty: props.value.marriagePlaceCounty,
            marriagePlaceState: props.value.marriagePlaceState,
            separationDate: props.value.separationDate,
        }
    }
    
    onMarriageDateChange = (event) => {
        this.setState({
            marriageDate: event.target.value
        },() => this.props.handleQ412Response(this.state))
    }

    onMarriagePlaceCityChange = (event) => {
        this.setState({
            marriagePlaceCity: event.target.value
        },() => this.props.handleQ412Response(this.state))
    }

    onMarriagePlaceCountyChange = (event) => {
        this.setState({
            marriagePlaceCounty: event.target.value
        },() => this.props.handleQ412Response(this.state))
    }

    onMarriagePlaceStateChange = (event) => {
        this.setState({
            marriagePlaceState: event.target.value
        },() => this.props.handleQ412Response(this.state))
    }

    onSeparationDateChange = (event) => {
        this.setState({
            separationDate: event.target.value
        },() => this.props.handleQ412Response(this.state))
    }


    render() {
        return (
            <div>
                <div className="q412container">
                    <label htmlFor="marriagedate" className="q412" >On what date were you married?</label>
                    <input className="marriagedate" value={this.props.value.marriageDate} type="date" onInput={this.onMarriageDateChange}></input>

                    <label htmlFor="marriageplace" className="q412" >Where were you married?</label>
                    <div>
                        <label htmlFor="marriageplacecity" className="q412-p2" >City</label>
                        <input id="marriageplacecity" className="q412-p2input" value={this.props.value.marriagePlace} type="text" onInput={this.onMarriagePlaceCityChange}></input>
                        <label htmlFor="marriageplacecounty" className="q412-p2" >County</label>
                        <input id="marriageplacecounty" className="q412-p2input" value={this.props.value.marriagePlace} type="text" onInput={this.onMarriagePlaceCountyChange}></input>
                        <label htmlFor="marriageplacestate" className="q412-p2" >State</label>
                        <input id="marriageplacestate" className="q412-p2input" value={this.props.value.marriagePlace} type="text" onInput={this.onMarriagePlaceStateChange}></input>
                    </div>

                    {this.props.separation === "true" && (
                        <div className="q412">
                            <label htmlFor="separationdate">Date of Separation:</label>
                            <input id="separationdate"  value={this.props.value.separationDate} type="date" onInput={this.onSeparationDateChange}></input>
                        </div>
                    )}
            
                </div>
            </div>
        )
    }
}

export default Question412
