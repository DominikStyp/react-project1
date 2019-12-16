import React from 'react';
import '../DominikComponents/MyList.css';

function MyList() {
    const itemDesc = "Some item";
    const someStyle = {color:"green"};
    return (
        <ul className="myUl">
            <li>{itemDesc} 1</li>
            <li style={ someStyle }>{itemDesc} 2</li>
            <li>{itemDesc} 3</li>
            <li>{itemDesc} 4</li>
            <li>{itemDesc} 5</li>
        </ul>
    );
}

export default MyList;