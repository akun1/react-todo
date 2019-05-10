import React, { Component } from 'react';
import Todos from '../Todos/Todos';
import './TodoItem.css';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default TodoItem

//prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}