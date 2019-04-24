import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

const myData=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:myData,
       item:'',
    };
  }

  addItem = items =>{
    items.preventDefault();
    const newItems={task:this.state.item, id:Date.now()};
    this.setState({
      data:[...this.state.data, newItems],
      item:'',
    });
  };

  updateItem=items=>{
    this.setState({
      [items.target.name]:items.target.value}
      );
    }
  

  render() {
    return (
      <div>
        <TodoList data={this.state.data}/>

        <TodoForm value={this.state.item} handleAddItem={this.addItem} handleItemChanhe={this.updateItem}/>
      </div>
    );
  }
}


export default App;
