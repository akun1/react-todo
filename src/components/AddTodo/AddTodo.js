import React, { Component } from 'react';
import './AddTodo.css';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    //sets components local state to whatever new value is onChange
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo(this.state.title);
        this.resetState();
    };

    resetState = () => {
        this.setState({
            title: ''
        });
    }

  render() {
    return (
        <form onSubmit={this.onSubmit} id="add-todo-container">
            <input id='todo-text-area' name='title' type='text' title='Add Todo' placeholder='Add a Todo!' value={this.state.title} onChange={this.onChange}/>
            <input type='submit' value='Submit' id='create-btn' />
        </form>
    )
  }
}

export default AddTodo;

AddTodo.propTypes = {
    createTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}