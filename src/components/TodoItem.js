import React from 'react';

const TodoItem = ({todo, onComplete}) => {
  return (
    <div className={getClassName(todo)}>
      <span className="todo-item__text">{ todo.text }</span>
      <i
        onClick={() => onComplete(todo.id)}
        id="complete"
        className="todo-item__check far fa-check-circle"
      />
    </div>
  );
};

const getClassName = (todo) => {
  return (todo.completed) ? 'todo-item complete' : 'todo-item';
}

export default TodoItem;