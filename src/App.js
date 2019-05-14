import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos/Todos';
import Header from './components/layout/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import { connect } from 'react-redux'

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
      });
  } 

  //create todo
  createTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => {
      this.setState({
        todos: [...this.state.todos, res.data]
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="app-container">
            <Header />
            <h1>hello {this.props.user.name}</h1>
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

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  };
};

const mapDispatchToProps = (state) => {
  return {
    setName: (name) => {
      state.store.dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);