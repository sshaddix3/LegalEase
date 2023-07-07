import React, { Component } from 'react'
import ClientListRow from './ClientListRow';

const allClients = {

}

let currentClient = 0;

let test2d = [
    ["Sawyer", "123", "Sherlock"],
    ["Mack", "543", "Arizone"],
    ["Ty", "785", "Wash"]
]

const allClientsArray = []

const addClientFields = {
    "nameField": "",
    "addressField": "",
    "cityField": "",
    "telephoneField": "",
    "emailField": "",
};

class AddClients extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showAddClient: false,
             reRender: false,
        }
    }

    showAddClient = (event) => {
        if(this.state.showAddClient){
            this.setState({
                showAddClient: false
            })
        }
        else{
            this.setState({
                showAddClient: true
            })
        }
    }

    sort2dArr = (a, b) => {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }

    handleNameInput = (event) => {
        addClientFields["nameField"] = event.target.value;
    }

    handleAddressInput = (event) => {
        addClientFields["addressField"] = event.target.value;
    }

    handleCityInput = (event) => {
        addClientFields["cityField"] = event.target.value;
    }

    handleTelephoneInput = (event) => {
        addClientFields["telephoneField"] = event.target.value;
    }
    
    handleEmailInput = (event) => {
        addClientFields["emailField"] = event.target.value;
    }

    addNewClient = (event) => {
        //SUCCESSFUL sorting of 2d array
        test2d.sort(this.sort2dArr);
        console.log(test2d);


        let sizeofClientList = Object.keys(allClients).length;

        allClients[`client${sizeofClientList + 1}`] = {
            name: addClientFields["nameField"],
            address: addClientFields["addressField"],
            city: addClientFields["cityField"],
            phone: addClientFields["telephoneField"],
            email: addClientFields["emailField"],
        };

        allClientsArray.push(`client${sizeofClientList + 1}`);
        currentClient = (`client${sizeofClientList + 1}`);

        console.log(allClients);
        console.log(allClientsArray);
        console.log(currentClient);
        this.setState({
            reRender: true,
            // showAddClient: false
        });

        //Resetting Input Fields to Empty for Adding Clients
        var nameInput = document.getElementById("addclient-name-input");
        var addressInput = document.getElementById("addclient-address-input");
        var cityInput = document.getElementById("addclient-city-input");
        var phoneInput = document.getElementById("addclient-phone-input");
        var emailInput = document.getElementById("addclient-email-input");

        nameInput.value="";
        addressInput.value="";
        cityInput.value="";
        phoneInput.value="";
        emailInput.value="";

        addClientFields["nameField"] = "";
        addClientFields["addressField"] = "";
        addClientFields["cityField"] = "";
        addClientFields["telephoneField"] = "";
        addClientFields["emailField"] = "";
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.showAddClient}>Add Client</button>

                    {this.state.showAddClient && (
                        <div>
                        <div className="addclient-container">
                            <div className="label-input-container">
                                <label>Name</label>
                                <input type="text" className="addclient-input-fields" id="addclient-name-input" onChange = {this.handleNameInput}></input>
                            </div>
                            <div className="label-input-container">
                                <label>Street Address</label>
                                <input type="text" className="addclient-input-fields" id="addclient-address-input" onChange = {this.handleAddressInput}></input>
                            </div>
                            <div className="label-input-container">
                                <label>City</label>
                                <input type="text" className="addclient-input-fields" id="addclient-city-input" onChange = {this.handleCityInput}></input>
                            </div>
                            <div className="label-input-container">
                                <label>Telephone Number</label>
                                <input type="text" className="addclient-input-fields" id="addclient-phone-input" onChange = {this.handleTelephoneInput}></input>
                            </div>
                            <div className="label-input-container">
                                <label>Email Address</label>
                                <input type="text" className="addclient-input-fields" id="addclient-email-input" onChange = {this.handleEmailInput}></input>
                            </div>
   
                        </div>
                        <button onClick={this.addNewClient} id="addclient-btn">Submit</button>
                        </div>  
                    )}
                    {/* {this.state.reRender && (
                        <div>
                            <ClientListRow allClients={allClients}></ClientListRow>
                        </div>
                    )} */}
                    
                    <div>
                        {allClientsArray.map(function(object, i){
                        return <ClientListRow obj={object} key={i} allClients={allClients} currentClient={currentClient}/>;
                        })}
                    </div>
            
                </div>
            </div>
        )
    }
}

export default AddClients
