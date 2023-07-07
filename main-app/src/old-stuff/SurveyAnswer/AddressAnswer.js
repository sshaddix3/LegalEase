import React, { Component } from 'react'
 
class AddressAnswer extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             Address: props.value.Address,
             City: props.value.City,
             County: props.value.County,
             State: props.value.State,
        }
    }
    
    onAddressChange = (event) => {
        this.setState({
            Address: event.target.value
        },() => this.props.handleAddressResponse(this.state))
    }

    onCityChange = (event) => {
        this.setState({
            City: event.target.value
        },() => this.props.handleAddressResponse(this.state))
        
    }

    onCountyChange = (event) => {
        this.setState({
            County: event.target.value
        },() => this.props.handleAddressResponse(this.state))
        
    }

    onStateChange = (event) => {
        this.setState({
            State: event.target.value
        },() => this.props.handleAddressResponse(this.state))
        
    }
    
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="addressanswer">Address</label>
                    <input className="addressanswer" value={this.props.value.Address} type="text" onInput={this.onAddressChange}></input>

                    <label htmlFor="cityanswer">City</label>
                    <input className="cityanswer" value={this.props.value.City} type="text" onInput={this.onCityChange}></input>

                    <label htmlFor="countyanswer">County</label>
                    <input className="countyanswer" value={this.props.value.County} type="text" onInput={this.onCountyChange}></input>

                    <label htmlFor="stateanswer">State</label>
                    <input className="stateanswer" value={this.props.value.State} type="text" onInput={this.onStateChange}></input>
                </div>
            </div>
        )
    }
}

export default AddressAnswer
