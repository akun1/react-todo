import React, { Component } from 'react';
import Todos from '../Todos/Todos';
import './TodoItem.css';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  
  render() {

    const { id, title } = this.props.todo;

    return (
      <div id='todoitem-container'>
        <p id='todoitem' className = {this.props.todo.completed ? 'completed' : 'incomplete' }>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
          { title }
          <button onClick={this.props.deleteTodo.bind(this, id)} id='delete-btn'>X</button>
        </p>
      </div>
    )
  }
}

export default TodoItem

//prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}