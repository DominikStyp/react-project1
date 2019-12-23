import React from "react";

class MyForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            favoriteFoods: [],
            rulesAccepted: false,
            gender: "1"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mySetState = this.mySetState.bind(this);
    }

    mySetState(obj){
        // setState is ASYNCHRONOUS function so we are sure state was updated
        // ONLY AFTER the callback function was invoked
        this.setState(obj, function(){
            console.log(this.state);
        });
    }

    handleChange(event){
        // here we use ECMA 6 feature "destructurizing"
        // http://es6-features.org/#ObjectMatchingShorthandNotation
        const {name,  value, type, checked} = event.target;
        if(type === "checkbox"){
            this.mySetState(
                {
                    [name]: checked
                },
            )
        }
        else if(type === "select-multiple"){
            let options = event.target.options;
            let result = [];
            for (let i = 0, iLen = options.length; i<iLen; i++) {
                let opt = options[i];
                if (opt.selected) {
                    result.push(opt.text); // opt.value for the value
                }
            }
            this.mySetState(
                {
                    // we wrap around square brackets because in vanilla JS
                    // we can set up properties for obj like: obj[somePropertyName] = 123
                    [name]: result
                }
            )
        }
        else {
            this.mySetState(
                {
                    [name]: value
                }
            )
        }
    }

    handleSubmit(event){
        console.log("Form was submitted");
        console.log(event.target);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} method="POST">
                <label htmlFor="firstName">First name: </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}/><br />
                <label htmlFor="firstName">Last name: </label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}/><br />
                <label htmlFor="favoriteFood">Favorite food: </label>
                <select name="favoriteFoods" multiple="multiple" onChange={this.handleChange}>
                    <option value="1">Pizza</option>
                    <option value="2">Kebab</option>
                    <option value="3">Mac Burger</option>
                    <option value="4">Chicken & Fries</option>
                </select><br />

                <label htmlFor="firstName">My gender is: </label>
                <input
                    type="radio"
                    name="gender"
                    onChange={this.handleChange}
                    value="1" checked="checked"/>Male
                <input
                    type="radio"
                    name="gender"
                    onChange={this.handleChange}
                    value="2"/>Female
                <br />
                <label htmlFor="firstName">I accept the rules </label>
                <input
                    type="checkbox"
                    name="rulesAccepted"
                    onChange={this.handleChange}/><br />


                <h3>About you</h3>
                <div id="info">
                    <div>{this.state.firstName} {this.state.lastName}</div>
                    <div>{this.state.rulesAccepted ? "You accepted the rules" : "You haven't accepted the rules"}</div>
                    <div>{this.state.gender === "1" ? "You are man" : "You are woman"}</div>
                    <div>Favorite foods: {this.state.favoriteFoods.join(", ")}</div>
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default MyForm;