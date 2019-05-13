import React from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
import Header from './components/layout/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';

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

  //create todo

  createTodo = (title) => {
    const newTodo = {
      title,
      id: 4,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          <AddTodo createTodo={this.createTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
