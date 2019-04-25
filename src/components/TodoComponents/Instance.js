import React from 'react';
import './Todo.css';

const Instance = props => {

    let classNames="item";
    if(props.item.completed){
        classNames+="completed"
    }


    function updateCompleted(){
        props.completedItems(props.item.id);
    }


    return (
        <div className={classNames} onClick={updateCompleted}>
            {props.item.name}
        </div>
    
    );
}
export default Instance;