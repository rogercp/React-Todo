import React from 'react';

const  TodoForm = props=> {
    return (
        <div>
            <input type="text" placeholder="......todoList" value={props.value}/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    
    );
}
export default TodoForm;