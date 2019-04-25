import React from 'react';

const  TodoForm = props=> {
    return (
        <form>
            <input type="text" placeholder="......todoList" value={props.value} name="item" onChange={props.handleItemUpdate}/>
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    
    );
}
export default TodoForm;