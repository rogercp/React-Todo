import React from 'react';
import './Todo.css';

class  TodoForm extends React.Component{
constructor(props){
    super(props);
    this.state={
        item:''
    };
}

    onUpdate=event=>{
        this.setState({
            [event.target.name]:event.target.value});
    };

    handleSubmit=event=>{
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item:''})
    }

    
    


    render(){
    return (
       
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                placeholder="......todoList" 
                id="new-item"
                value={this.state.item} 
                name="item" 
                onChange={this.onUpdate}
            />
            <button type="submit">Add Todo</button>
            
        </form>
       
        
    );
    }
}
export default TodoForm; 