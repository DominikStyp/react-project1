import React from "react";
import '../DominikComponents/OneItem.css';

class OneItem extends React.Component {
    liClicked(){
        console.log("clicked");
    }

    render() {
        const cName = (this.props.checked) ? "checked" : "unchecked" ;
        return (
            <li className={cName} onClick={this.liClicked} >
                {this.props.desc}
                <input type="checkbox" checked={this.props.checked} readOnly={true}/>
            </li>
        );
    }
}

OneItem.defaultProps = {
    checked: false,
    desc: "[UNDEFINED]"
};

export default OneItem;