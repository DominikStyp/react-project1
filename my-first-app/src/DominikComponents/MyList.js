import React from 'react';
import '../DominikComponents/MyList.css';
import OneItem from "./OneItem";
import todosData from "./todosData";

class MyList extends React.Component {

    constructor(){
        super();
        this.state = {
            something: "That is something!"
        }
    }

    render() {
        let items = this.getItems(todosData);
        return (
            <ul className="myUl">
                {items}
            </ul>
        );
    }
    getItems(arr) {
        // here we use arrow function (ES 6)
        return arr.map(item => <OneItem key={item.id} desc={item.desc} checked={item.checked}/>)
    }
}

export default MyList;