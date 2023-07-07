import React, { Component } from 'react'
import AddClients from './AddClients';

class ClientList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Client List</h1>
                <div>
                    <AddClients></AddClients>
                </div>
            </div>
        )
    }
}

export default ClientList
