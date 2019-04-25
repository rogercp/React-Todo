import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const data=[
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
              data
            };
          }
              
              
              
              addItem=item=>{
              this.setState({
                data:[
                  ...this.state.data,
                  {task:item, id:Date.now(),completed:false }
              ]
            })
          }

              completedItems=id=>{
                this.setState({
                  data:this.state.data.map(item=>
                    item.id===id ? {...item, completed: !item.completed} :item)
                });
              }

              
              completedDataClear=()=>{
                this.setState({
                  data:this.state.data.filter(item=>!item.completed)
                });
              }

              
          

          render() {
            
            return (
              <div className="app">
                    <h1 className="title">To Do List</h1>
                <div>
                    <TodoList 
                    data={this.state.data}
                    completedItems={this.completedItems}
                    />
                </div>
                <div>
                  <TodoForm
                        addItem={this.addItem}                 
                        
                    />
                </div>
                <button onClick={this.completedDataClear}>Clear Completed</button>
              </div>
            )
          }
        }


export default App;
