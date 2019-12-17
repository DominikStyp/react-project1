import React from 'react';
import '../DominikComponents/MyList.css';
import OneItem from "./OneItem";


function MyList() {
    // TODO: pass object property to the component like
    // coords={ {x:2, y:3} }
    return (
        <ul className="myUl">
           <OneItem desc="Go to shop"/>
           <OneItem desc="Go to dentist" checked={true}/>
        </ul>
    );
}

export default MyList;