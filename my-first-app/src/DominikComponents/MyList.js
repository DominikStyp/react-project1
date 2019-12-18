import React from 'react';
import '../DominikComponents/MyList.css';
import OneItem from "./OneItem";
import todosData from "./todosData";


function MyList() {
    let items = getItems(todosData);
    return (
        <ul className="myUl">
            {items}
        </ul>
    );
}

function getItems(arr)
{
    // here we use arrow function (ES 6)
    return arr.map(item => <OneItem desc={item.desc} checked={item.checked}/>)
}

export default MyList;