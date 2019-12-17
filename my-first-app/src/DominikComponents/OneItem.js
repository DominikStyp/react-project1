import React from "react";
import '../DominikComponents/OneItem.css';
function OneItem(props) {
    const cName = (props.checked) ? "checked" : "unchecked" ;
    return (
        <li className={cName} >
            {props.desc} <input type="checkbox" checked={props.checked}/>
        </li>
    );
}

OneItem.defaultProps = {
    checked: false,
    desc: "[UNDEFINED]"
};

export default OneItem;