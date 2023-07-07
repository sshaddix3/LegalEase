import React, { Component } from 'react'


class ClientListShow extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
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

    helperFunction = (event) => {
        const {currentClient} = this.state;
        const {test2d, clientnum} = this.props;
        const currentName = test2d[clientnum][0];
        const currentAddress = test2d[clientnum][1];
        const currentCity = test2d[clientnum][2];
        const currentTelephone = test2d[clientnum][3];
        const currentEmail = test2d[clientnum][4];
        let row = [];
        let fixr = [currentName, currentAddress, currentCity, currentTelephone, currentEmail];
        for(let i=0; i< 5; i++){
            row.push(<input key={i} className="elements-in-row" readOnly={true} value={fixr[i]}/>)
        }
        return row;
    }

    render() {

        return (
            <div>
            
            <div className="row-container-clientlist">
                {this.helperFunction()}
                {/* {this.props.test2d.map((name, index) => (
                <div key={index}>
                    <div className="show-row-container">
                        <div>{currentName}</div>
                        <div>{currentAddress}</div>
                        <div>{currentCity}</div>
                        <div>{currentTelephone}</div>
                        <div>{currentEmail}</div>
                    </div>
                </div>
                ))} */}
            </div>


            {/* <table className="client-list-table">
                <thead> 
                    <tr className="client-list-table-headerrow">
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Telephone</th>
                        <th>Email</th>
                    </tr>    
                </thead> 
                <tbody className="client-list-table-body"> 
                <tr className="client-list-table-row">
                    <td className="client-list-table-data">{currentName}</td>
                    <td className="client-list-table-data">{currentAddress}</td>
                    <td className="client-list-table-data">{currentCity}</td>
                    <td className="client-list-table-data">{currentTelephone}</td>
                    <td className="client-list-table-data">{currentEmail}</td>
                </tr>
                <tr className="client-list-table-row">
                    <td className="client-list-table-data">d</td>
                    <td className="client-list-table-data">d</td>
                    <td className="client-list-table-data">d</td>
                    <td className="client-list-table-data">d</td>
                    <td className="client-list-table-data">d</td>
                </tr>
                </tbody>
            </table> */}

            {/* <div className="client-list-container">
                <div className="label-input-container">
                    <input type="text" className="addclient-input-fields" value={currentName} onChange={this.handleNameInput}></input>
                </div>
                <div className="label-input-container">
                    <input type="text" className="addclient-input-fields" value={currentAddress} onChange = {this.handleAddressInput}></input>
                </div>
                <div className="label-input-container">
                    <input type="text" className="addclient-input-fields" value={currentCity} onChange = {this.handleCityInput}></input>
                </div>
                <div className="label-input-container">
                    <input type="text" className="addclient-input-fields" value={currentTelephone} onChange = {this.handleTelephoneInput}></input>
                </div>
                <div className="label-input-container">
                    <input type="text" className="addclient-input-fields" value={currentEmail} onChange = {this.handleEmailInput}></input>
                </div>
            </div> */}
            </div>
        )
    }
}

export default ClientListShow
