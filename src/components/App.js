import React, { Component } from 'react';

import AddTodoItem from './AddTodoItem';
import ClearTodos from './ClearTodos';
import TodoList from './TodoList';


export default class App extends Component {

  state = {
    todos: [
      {id: 1, text: 'Hello there! Thanks for visiting', completed: false},
      {id: 2, text: 'Click the trash icon', completed: false},
      {id: 3, text: 'Don\'t mind me, I\'m done.', completed: true},
    ],
  }

  saveAndPersistTodos(todos) {
    this.setState({todos});
    /*
      The reason why I passed `todos` instead of `this.state.todos`
      to JSON.stringify is because setState isn't guaranteed to update ASAP!
      https://reactjs.org/docs/react-component.html#setstate
    */ 
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
      this.setState({todos});
    }
  }

  handleFormSumbit(todo) {
    const todos = this.state.todos.slice();
    todos.unshift(todo);
    this.saveAndPersistTodos(todos);
  }

  handleTodoCompleted(id) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.saveAndPersistTodos(todos);
  }

  handleClear() {
    this.saveAndPersistTodos([]);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Taskinator</h1>
        <div className="app-container">
          <AddTodoItem onFormSubmit={(todo) => this.handleFormSumbit(todo)} />
          <TodoList todos={this.state.todos} onComplete={(id) => this.handleTodoCompleted(id)}/>
          <ClearTodos onClear={() => this.handleClear() } />
        </div>
      </div>
    );
  }
}