// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Instance from './Instance';
import './Todo.css';



const  TodoList = props =>{
    return (
        <div className="todo-list">
            {props.data.map(item => (
                    <Instance key={item.id} item={item}
                    completedItems={props.completedItems} 
                    />
                ))}
        </div>
    );
};
export default TodoList;
