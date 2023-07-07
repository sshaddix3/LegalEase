import React, { Component } from 'react'
import ClientListShow from './ClientListShow';
import ClientListRow from './ClientListRow';

let addClientFields = {
    "nameField": "",
    "addressField": "",
};

let tempArray = [];

let test2d = [

];

let helperButtonStateVar = 0;

let buttonHelper2d = [];

let new2dArray = [];

let temp1darray = [];

class ClientListAttempt2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            counter2: 0,
            showAddClient: false,
            helperStateVar: 0,
            //need delete buttons to show up without using search function
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

    insertInfo = (event, inputType) => {
        test2d.push(tempArray);
    }

    handleNameInput = (event) => {
        tempArray[0] = (event.target.value);
    }
    handleAddressInput = (event) => {
        tempArray[1] = (event.target.value);
    }
    handleCityInput = (event) => {
        tempArray[2] = (event.target.value);
    }
    handleTelephoneInput = (event) => {
        tempArray[3] = (event.target.value);
    }
    handleEmailInput = (event) => {
        tempArray[4] = (event.target.value);
    }

    handleNewClientBtnPress = (event) => {
        event.preventDefault();
        test2d.push(tempArray.slice());

        // const updateClientToDB = {
        //     userID: this.props.user.id,
        //     userName: this.props.user.name,
        //     clientNum: this.state.counter,
        //     clientName: test2d[test2d.length-1][0]
        // }
        // console.log(updateClientToDB.clientName);

        // fetch("http://localhost:3001/insertClientToDB", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     credentials: "include",
        //     body: JSON.stringify(updateClientToDB) 
        // }).then((res) => {
        //     return res.json();
        // }).then((parsedResponse) => {
        //     console.log(parsedResponse);
        // })

        console.log(test2d);
        test2d.sort(this.sort2dArr);
        this.setState({
            counter: this.state.counter + 1
        })

        document.getElementById('addclient-name-input').value = '';
        document.getElementById('addclient-address-input').value = '';
        document.getElementById('addclient-city-input').value = '';
        document.getElementById('addclient-phone-input').value = '';
        document.getElementById('addclient-email-input').value = '';
        for (let j = 0; j < tempArray.length; j++) {
            tempArray[j] = "";
        }
        this.forceUpdate();

    }

    showAddClient = (event) => {

        if (this.state.showAddClient) {
            this.setState({
                showAddClient: false
            })
        }
        else {
            this.setState({
                showAddClient: true
            })
        }
    }

    helperFunction = (helperVariable) => {
        let twodtopush;
        let displayArr1 = [];
        let displayArr2 = [];
        let row;
        if (helperVariable == 0) {
            twodtopush = test2d;
            row = test2d.map((x) => x);
            for (let i = 0; i < row.length; i++) {
                displayArr1.push(<ClientListRow key={i} test2d={twodtopush} clientnum={i} />)
            }
            return displayArr1;
        }

        if (helperVariable == 1) {
            twodtopush = new2dArray;
            row = new2dArray.map((x) => x);
            for (let i = 0; i < row.length; i++) {
                displayArr2.push(<ClientListRow key={i} test2d={twodtopush} clientnum={i} />)
            }
            return displayArr2;
        }
    }

    search2d = (event) => {
        //Force everything to be standardized no capital letters or all beginning with capital letters
        if (event.target.value != "") {
            this.setState({
                helperStateVar: 1
            })
            helperButtonStateVar = 1;
        }
        else{
            this.setState({
                helperStateVar: 0
            })
            helperButtonStateVar = 0;
        }


        let arr = test2d.map((x) => x);
        let input = event.target.value;
        let helperArray = [];

        for (var z = 0; z < arr.length; z++) {
            for (let f = 0; f < arr[z].length; f++) {
                if (arr[z][f].includes(input)) {
                    console.log(`${arr[z][f]} -- ${z} -- ${f}`);
                    if(!(helperArray.includes(arr[z]))){
                        helperArray.push(arr[z]);
                    }
                    else{
                        continue;
                    }
                }
            }
            // if (arr[z].indexOf(input) !== -1) {
            //     //Found
            //     console.log(`${arr[z][arr[z].indexOf(input)]} -- ${z} -- ${arr[z].indexOf(input)}`);
            //     break;
            // }
        }
        new2dArray = helperArray;
        buttonHelper2d = helperArray;
        console.log(new2dArray);


    }

    buttonHelperFunction = () => {
        if(helperButtonStateVar == 0){
            buttonHelper2d = test2d.map((x) => x);;
        }
        let displayArr = [];
        let row = buttonHelper2d.map((x) => x);
        for (let i = 0; i < row.length; i++) {
            displayArr.push(<button key={i} className="delete-btns" onClick={() => this.deleteButtons(i)}>delete</button>)
        }
        return displayArr;
    }

    deleteButtons = (i, event) => {
        if(helperButtonStateVar == 0){
            test2d.splice(i, 1);
        }
        buttonHelper2d.splice(i, 1);
        console.log(`Delete${i}`);
        console.log(test2d);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button onClick={this.showAddClient} className="add-new-client-menu-btn">Add New Client</button>
                <input type="text" className="search-client-list-input" onInput={this.search2d}></input>

                {(this.state.showAddClient &&
                    <form className="addclient-container">
                        <div className="label-input-container">
                            <label>Name</label>
                            <input type="text" className="addclient-input-fields" id="addclient-name-input" onInput={this.handleNameInput} onBlur={this.handleOnBlur}></input>
                        </div>
                        <div className="label-input-container">
                            <label>Street Address</label>
                            <input type="text" className="addclient-input-fields" id="addclient-address-input" onChange={this.handleAddressInput} onBlur={this.handleOnBlur}></input>
                        </div>
                        <div className="label-input-container">
                            <label>City</label>
                            <input type="text" className="addclient-input-fields" id="addclient-city-input" onChange={this.handleCityInput} onBlur={this.handleOnBlur}></input>
                        </div>
                        <div className="label-input-container">
                            <label>Telephone Number</label>
                            <input type="text" className="addclient-input-fields" id="addclient-phone-input" onChange={this.handleTelephoneInput} onBlur={this.handleOnBlur}></input>
                        </div>
                        <div className="label-input-container">
                            <label>Email Address</label>
                            <input type="text" className="addclient-input-fields" id="addclient-email-input" onChange={this.handleEmailInput} onBlur={this.handleOnBlur}></input>
                        </div>
                        <div>
                            <button onClick={this.handleNewClientBtnPress} type="submit" className="insert-client-btn">click</button>
                        </div>
                    </form>
                )}
                <div className="ui-database-container">
                    <div className="ui-database-row-container">
                        {(this.state.helperStateVar == 0 &&
                            this.helperFunction(0)
                        )}
                        {(this.state.helperStateVar == 1 &&
                            this.helperFunction(1)
                        )}
                    </div>
                    <div className="ui-database-delete-container">
                        {this.buttonHelperFunction()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientListAttempt2