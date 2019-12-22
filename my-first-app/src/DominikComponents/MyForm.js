import React from "react";

class MyForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            rulesAccepted: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // here we use ECMA 6 feature "destructurizing"
        // http://es6-features.org/#ObjectMatchingShorthandNotation
        const {name,  value, type, checked} = event.target;
        if(type === "checkbox"){
            // setState is ASYNCHRONOUS function so we are sure state was updated
            // ONLY AFTER the callback function was invoked
            this.setState(
                {
                    [name]: checked
                },
                function(){
                    console.log(this.state);
                }
            )
        }
        else {
            this.setState(
                {
                    // we wrap around square brackets because in vanilla JS
                    // we can set up properties for obj like: obj[somePropertyName] = 123
                    [name]: value
                },
                function(){
                    console.log(this.state);
                }
            )
        }

    }

    render() {
        return(
            <form>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/><br />
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/><br />
                <input type="checkbox" name="rulesAccepted" onChange={this.handleChange}/><br />
                <div id="info">
                    <p>{this.state.firstName} {this.state.lastName}</p>
                    <p>{this.state.rulesAccepted ? "You accepted the rules" : "You haven't accepted the rules"}</p>
                </div>
            </form>
        );
    }
}

export default MyForm;