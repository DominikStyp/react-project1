import React from 'react';
import '../DominikComponents/MyList.css';
import OneItem from "./OneItem";
import todosData from "./todosData";

class MyList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todos: todosData
        };
        this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    render() {
        let items = this.getItems(this.state.todos);
        return (
            <div> <p>items selected: {this.getSelectedCount()}</p>
                <ul className="myUl">
                    {items}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        console.log('I am mounted!');
    }

    getSelectedCount()
    {
        let arr = this.state.todos.filter(function(todo){
            return todo.checked;
        });
        return arr.length;
    }

    selectOrUnselectTodo(todos, itemId, isSelected){
        return todos.map(function(todo){
            if(todo.id === itemId){
                todo.checked = isSelected;
            }
            return todo;
        });
    }

    handleSelectItem(isChecked, itemId) {

        this.setState((prevState) =>
            {
                let newTodos = this.selectOrUnselectTodo(prevState.todos, itemId, isChecked);
                return { todos: newTodos };
            }, function(){
            }
        );

    }

    getItems(arr) {
        // here we use arrow function (ES 6)
        // we use itemId because key is internally used by REACT
        return arr.map(item =>
            <OneItem
                key={item.id}
                itemId={item.id}
                desc={item.desc}
                checked={item.checked}
                onSelectItem={this.handleSelectItem}
            />
         );
    }
}

export default MyList;