import React, { Component } from 'react'

const allClients = {
    
};

class ClientListRow extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             currentClient: this.props.currentClient,
        }
    }

   
    handleNameInput = (event) => {
        
    }
    handleAddressInput = (event) => {
        
    }
    handleCityInput = (event) => {
        
    }
    handleTelephoneInput = (event) => {
        
    }
    handleEmailInput = (event) => {
        
    }

    handleDeleteBtn = (event) => {

    }

    render() {
        const {currentClient} = this.state;
        // const currentName = this.props.allClients[currentClient].name
        // const currentAddress = this.props.allClients[currentClient].address
        // const currentCity = this.props.allClients[currentClient].city
        // const currentTelephone = this.props.allClients[currentClient].phone
        // const currentEmail = this.props.allClients[currentClient].email

        const {test2d, clientnum} = this.props;
        const currentName = test2d[clientnum][0];
        const currentAddress = test2d[clientnum][1];
        const currentCity = test2d[clientnum][2];
        const currentTelephone = test2d[clientnum][3];
        const currentEmail = test2d[clientnum][4];
        return (
            <div>
                <div className="client-list-container">
                    <div className="label-input-container">
                        <input type="text" className="addclient-input-fields" value={currentName} onChange={this.handleNameInput} readOnly={true}></input>
                    </div>
                    <div className="label-input-container">
                        <input type="text" className="addclient-input-fields" value={currentAddress} onChange = {this.handleAddressInput} readOnly={true}></input>
                    </div>
                    <div className="label-input-container">
                        <input type="text" className="addclient-input-fields" value={currentCity} onChange = {this.handleCityInput} readOnly={true}></input>
                    </div>
                    <div className="label-input-container">
                        <input type="text" className="addclient-input-fields" value={currentTelephone} onChange = {this.handleTelephoneInput} readOnly={true}></input>
                    </div>
                    <div className="label-input-container">
                        <input type="text" className="addclient-input-fields" value={currentEmail} onChange = {this.handleEmailInput} readOnly={true}></input>
                    </div>
                </div>
                {/* <button className="client-delete-btn" onClick={this.handleDeleteBtn}>delete</button> */}
            </div>
        )
    }
}

export default ClientListRow
