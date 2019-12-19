import React from "react";
import '../DominikComponents/OneItem.css';

class OneItem extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            isChecked: this.props.checked
        };
        // we must bind method to "this" object
        // in order to use a state inside of it
        this.handleLiClick = this.handleLiClick.bind(this);
    }

    handleLiClick(){
        // here we pass the previous version of state
        // WARNING! don't use this.state as previous version of state
        // it might cause errors!
        this.setState( (previousState) => {
            return {
                isChecked: !previousState.isChecked
            }
        });
    }

    // part of lifecycle
    componentDidMount() {

    }

    render() {
        const cName = (this.state.isChecked) ? "checked" : "unchecked" ;
        return (
            <li className={cName} onClick={this.handleLiClick} >
                {this.props.desc}
                <input type="checkbox" checked={this.state.isChecked} />
            </li>
        );
    }
}

// this is how we set up default props, those are used if no value is passed to component
OneItem.defaultProps = {
    checked: false,
    desc: "[UNDEFINED]"
};

export default OneItem;