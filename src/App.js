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
        completed: true
      },
      {
        title: 'mow lawn',
        id: '3',
        completed: false
      }
    ]
  }

  markComplete = (event) => {
    console.log("bang")
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
