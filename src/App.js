import React from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

class App extends React.Component {

  state = {
    todos: [
      {
        title: 'take out trash',
        id: '1',
        completed: false
      },
      {
        title: 'cook dinner',
        id: '2',
        completed: false
      },
      {
        title: 'mow lawn',
        id: '3',
        completed: false
      }
    ]
  }
  //toggle completion of todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //delete todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  } 

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
