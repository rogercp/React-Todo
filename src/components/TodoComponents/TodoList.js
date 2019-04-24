// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './item';
import Item from './item';



const  TodoList = props =>{
    return (
        <div>
            {
                props.data.map(item=>{
                    <Item />
                })
            }
        </div>
    
    );
}
export default TodoList;
