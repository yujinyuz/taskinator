import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    // console.log(this.props);
    const { todos, onComplete } = this.props;
    // const todoList = todos.map((todo) => <TodoItem todo={todo}/>);
    const todoList = todos.map(todo => <TodoItem key={todo.id} todo={todo} onComplete={onComplete} />)
    return (
      <div className="todo-body">
        <div className="todo-list">
          {todoList}
        </div>
      </div>
    );
  }
}