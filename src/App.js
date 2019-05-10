import React from 'react';
import './App.css';
import Todos from './components/Todos';

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
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
