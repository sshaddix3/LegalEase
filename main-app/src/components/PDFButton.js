import React, { Component } from 'react'

class PDFButton extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    onGenButton = (event) =>{

        const pdfGenBody = {
            userID: this.props.user.id,
            userName: this.props.user.name,
            answers: this.props.answers,
        }

        fetch("http://localhost:3001/pdfGenerator", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(pdfGenBody) 
        }).then((res) => {
            return res.json();
        }).then((parsedResponse) => {
            console.log(parsedResponse);
        })

    }
    
    render() {
        return (
            <div>
                <button className='pdf-btn' onClick={this.onGenButton}>button</button>
            </div>
        )
    }
}

export default PDFButton
