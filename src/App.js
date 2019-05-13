import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos/Todos';
import Header from './components/layout/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

class App extends React.Component {

  state = {
    todos: []
  }

  //load sample todos from 'backend' ie the json placeholder backend
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
      id: uuid.v4(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo createTodo={this.createTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
